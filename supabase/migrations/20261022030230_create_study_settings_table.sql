/*
# Create study_settings table for cloud learning assistant

## Purpose
Stores each student's preferred local language, study reminder time,
and which days of the week they want to be reminded to study.

## New Table: study_settings
- id (uuid, primary key, auto-generated)
- user_id (uuid, not null, defaults to authenticated user, references auth.users with cascade delete)
- preferred_language (text, not null) — one of: kiswahili, dinka, arabi-juba, amharic
- reminder_time (time, not null) — e.g. '19:00'
- reminder_days (text[], default '{}') — array of lowercase day names e.g. ['monday','wednesday']
- is_active (boolean, default true) — whether reminders are on or off
- created_at (timestamptz, default now)
- updated_at (timestamptz, default now)

## Security
- RLS enabled on study_settings
- Each authenticated user can only SELECT, INSERT, UPDATE, DELETE their own row
- Owner column user_id defaults to auth.uid() so inserts from the client work without passing user_id
*/

CREATE TABLE IF NOT EXISTS study_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  preferred_language text NOT NULL DEFAULT 'kiswahili',
  reminder_time time NOT NULL DEFAULT '19:00',
  reminder_days text[] NOT NULL DEFAULT '{}',
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE study_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_settings" ON study_settings;
CREATE POLICY "select_own_settings"
  ON study_settings FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_settings" ON study_settings;
CREATE POLICY "insert_own_settings"
  ON study_settings FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_settings" ON study_settings;
CREATE POLICY "update_own_settings"
  ON study_settings FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_settings" ON study_settings;
CREATE POLICY "delete_own_settings"
  ON study_settings FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);
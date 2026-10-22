import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { supabase, type StudySettings } from '@/lib/supabase';
import { useAuth } from './AuthContext';

type SettingsContextType = {
  settings: StudySettings | null;
  loading: boolean;
  saveSettings: (s: Partial<StudySettings>) => Promise<{ error: string | null }>;
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [settings, setSettings] = useState<StudySettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setSettings(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    (async () => {
      const { data, error } = await supabase
        .from('study_settings')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (!error && data) {
        setSettings(data as StudySettings);
      }
      setLoading(false);
    })();
  }, [user]);

  const saveSettings = async (s: Partial<StudySettings>) => {
    if (!user) return { error: 'Not authenticated' };

    if (settings) {
      const { data, error } = await supabase
        .from('study_settings')
        .update({ ...s, updated_at: new Date().toISOString() })
        .eq('user_id', user.id)
        .select('*')
        .single();
      if (error) return { error: error.message };
      setSettings(data as StudySettings);
      return { error: null };
    }

    const { data, error } = await supabase
      .from('study_settings')
      .insert({ ...s, user_id: user.id })
      .select('*')
      .single();
    if (error) return { error: error.message };
    setSettings(data as StudySettings);
    return { error: null };
  };

  return (
    <SettingsContext.Provider value={{ settings, loading, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings must be used within SettingsProvider');
  return ctx;
}

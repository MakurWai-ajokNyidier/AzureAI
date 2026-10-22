import { useState, useEffect } from 'react';
import { Clock, Bell, BellOff, Calendar, Save, Check } from 'lucide-react';
import { useSettings } from '@/context/SettingsContext';
import { LANGUAGES, type LanguageCode } from '@/data/concepts';

const DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export function ReminderClock() {
  const { settings, loading, saveSettings } = useSettings();

  const [time, setTime] = useState('19:00');
  const [days, setDays] = useState<string[]>([]);
  const [isActive, setIsActive] = useState(true);
  const [preferredLang, setPreferredLang] = useState<LanguageCode>('kiswahili');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [reminder, setReminder] = useState<string | null>(null);

  useEffect(() => {
    if (settings) {
      setTime(settings.reminder_time ?? '19:00');
      setDays(settings.reminder_days ?? []);
      setIsActive(settings.is_active ?? true);
      setPreferredLang((settings.preferred_language as LanguageCode) ?? 'kiswahili');
    }
  }, [settings]);

  // Check every minute if it's time to remind
  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
      const now = new Date();
      const currentDay = DAYS[(now.getDay() + 6) % 7];
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      const currentTime = `${hh}:${mm}`;

      if (currentTime === time && days.includes(currentDay)) {
        setReminder(`It's ${time} — time to study Azure cloud concepts!`);
        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification('CloudAfrika Study Time', {
            body: `It's ${time} — time to study Azure cloud concepts!`,
          });
        }
        setTimeout(() => setReminder(null), 30000);
      }
    }, 60000);
    return () => clearInterval(interval);
  }, [isActive, time, days]);

  const toggleDay = (day: string) => {
    setDays((prev) => (prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]));
  };

  const handleSave = async () => {
    setSaving(true);
    const { error } = await saveSettings({
      preferred_language: preferredLang,
      reminder_time: time,
      reminder_days: days,
      is_active: isActive,
    });
    setSaving(false);
    if (!error) {
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
      if ('Notification' in window && Notification.permission !== 'granted') {
        Notification.requestPermission();
      }
    }
  };

  const localLangs = LANGUAGES.filter((l) => l.isLocal);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Clock className="w-8 h-8 text-primary-400 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="bg-midnight-200/50 border border-white/5 rounded-2xl p-6 sm:p-8 max-w-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary-600/15 border border-primary-500/20 flex items-center justify-center">
            <Clock className="w-6 h-6 text-primary-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Study Reminder Clock</h2>
            <p className="text-sm text-gray-500">Set your daily study schedule</p>
          </div>
        </div>

        {/* Active toggle */}
        <div className="flex items-center justify-between bg-midnight-300/40 rounded-xl p-4 mb-5">
          <div className="flex items-center gap-3">
            {isActive ? (
              <Bell className="w-5 h-5 text-accent-400" />
            ) : (
              <BellOff className="w-5 h-5 text-gray-500" />
            )}
            <div>
              <p className="text-sm text-white font-medium">
                {isActive ? 'Reminders are ON' : 'Reminders are OFF'}
              </p>
              <p className="text-xs text-gray-500">
                {isActive
                  ? 'You will be notified at your set time'
                  : 'Turn on to get study notifications'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsActive(!isActive)}
            className={`relative w-12 h-6 rounded-full transition-all ${
              isActive ? 'bg-accent-600' : 'bg-midnight-400'
            }`}
          >
            <span
              className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all ${
                isActive ? 'left-6' : 'left-0.5'
              }`}
            />
          </button>
        </div>

        {/* Preferred language */}
        <div className="mb-5">
          <label className="block text-sm text-gray-400 mb-2">Study Language</label>
          <div className="flex flex-wrap gap-2">
            {localLangs.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setPreferredLang(lang.code)}
                className={`px-3 py-2 rounded-lg text-sm font-medium border transition-all ${
                  preferredLang === lang.code
                    ? 'bg-primary-600 text-white border-primary-500'
                    : 'bg-midnight-300/50 text-gray-400 border-white/5 hover:text-white'
                }`}
              >
                <span className="mr-1.5">{lang.flag}</span>
                {lang.nativeName}
              </button>
            ))}
          </div>
        </div>

        {/* Time picker */}
        <div className="mb-5">
          <label className="block text-sm text-gray-400 mb-2">Reminder Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="bg-midnight-300/60 border border-white/5 rounded-xl px-4 py-3 text-white text-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
          />
        </div>

        {/* Days selector */}
        <div className="mb-6">
          <label className="block text-sm text-gray-400 mb-2 flex items-center gap-1.5">
            <Calendar className="w-4 h-4" /> Study Days
          </label>
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
            {DAYS.map((day) => (
              <button
                key={day}
                onClick={() => toggleDay(day)}
                className={`py-2 rounded-lg text-xs font-medium capitalize transition-all ${
                  days.includes(day)
                    ? 'bg-primary-600 text-white'
                    : 'bg-midnight-300/50 text-gray-500 hover:text-white border border-white/5'
                }`}
              >
                {day.slice(0, 3)}
              </button>
            ))}
          </div>
        </div>

        {/* Save button */}
        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full bg-primary-600 hover:bg-primary-500 text-white font-medium py-3 rounded-xl transition-all shadow-lg shadow-primary-600/20 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {saving ? (
            <Clock className="w-4 h-4 animate-spin" />
          ) : saved ? (
            <>
              <Check className="w-4 h-4" /> Saved!
            </>
          ) : (
            <>
              <Save className="w-4 h-4" /> Save Reminder
            </>
          )}
        </button>

        {/* In-app reminder notification */}
        {reminder && (
          <div className="mt-4 bg-accent-600/15 border border-accent-500/30 rounded-xl p-4 flex items-start gap-3 animate-fade-in-up">
            <Bell className="w-5 h-5 text-accent-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-white font-medium text-sm">Study Time!</p>
              <p className="text-accent-300/80 text-sm">{reminder}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

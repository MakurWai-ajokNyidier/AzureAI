import { useState } from 'react';
import { Cloud, Loader2 } from 'lucide-react';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { SettingsProvider, useSettings } from '@/context/SettingsContext';
import { AuthScreen } from '@/components/AuthScreen';
import { Header } from '@/components/Header';
import { ConceptBrowser } from '@/components/ConceptBrowser';
import { ReminderClock } from '@/components/ReminderClock';
import type { LanguageCode } from '@/data/concepts';

type Tab = 'learn' | 'reminder';

function MainApp() {
  const { loading } = useAuth();
  const { settings } = useSettings();
  const [tab, setTab] = useState<Tab>('learn');

  const preferredLang = (settings?.preferred_language as LanguageCode) ?? 'kiswahili';

  if (loading) {
    return (
      <div className="min-h-screen bg-midnight-300 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-600/20 border border-primary-500/30 mb-4">
            <Cloud className="w-9 h-9 text-primary-400 animate-pulse" />
          </div>
          <p className="text-gray-500 flex items-center gap-2 text-sm">
            <Loader2 className="w-4 h-4 animate-spin" /> Loading CloudAfrika...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-midnight-300">
      <Header activeTab={tab} onTabChange={setTab} />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {tab === 'learn' ? (
          <ConceptBrowser preferredLanguage={preferredLang} />
        ) : (
          <ReminderClock />
        )}
      </main>
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 py-6 border-t border-white/5 mt-8">
        <p className="text-center text-xs text-gray-600">
          CloudAfrika — Azure cloud concepts for African students, in local languages
        </p>
      </footer>
    </div>
  );
}

function Gate() {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-midnight-300 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-600/20 border border-primary-500/30 mb-4">
            <Cloud className="w-9 h-9 text-primary-400 animate-pulse" />
          </div>
          <p className="text-gray-500 flex items-center gap-2 text-sm">
            <Loader2 className="w-4 h-4 animate-spin" /> Loading CloudAfrika...
          </p>
        </div>
      </div>
    );
  }

  if (!session) return <AuthScreen />;

  return (
    <SettingsProvider>
      <MainApp />
    </SettingsProvider>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Gate />
    </AuthProvider>
  );
}

import { Cloud, LogOut, BookOpen, Clock } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

type Tab = 'learn' | 'reminder';

type Props = {
  activeTab: Tab;
  onTabChange: (t: Tab) => void;
};

export function Header({ activeTab, onTabChange }: Props) {
  const { user, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-midnight-300/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-primary-600/20 border border-primary-500/30 flex items-center justify-center">
            <Cloud className="w-5 h-5 text-primary-400" />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg leading-none">CloudAfrika</h1>
            <p className="text-xs text-gray-500 leading-none mt-0.5">Azure in your language</p>
          </div>
        </div>

        <nav className="flex items-center gap-1">
          <button
            onClick={() => onTabChange('learn')}
            className={`px-3 sm:px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all ${
              activeTab === 'learn'
                ? 'bg-primary-600/20 text-primary-300 border border-primary-500/20'
                : 'text-gray-500 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span className="hidden sm:inline">Learn</span>
          </button>
          <button
            onClick={() => onTabChange('reminder')}
            className={`px-3 sm:px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all ${
              activeTab === 'reminder'
                ? 'bg-primary-600/20 text-primary-300 border border-primary-500/20'
                : 'text-gray-500 hover:text-white'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span className="hidden sm:inline">Reminder</span>
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500 hidden sm:block max-w-[160px] truncate">
            {user?.email}
          </span>
          <button
            onClick={signOut}
            className="w-9 h-9 rounded-lg bg-midnight-200/50 border border-white/5 flex items-center justify-center text-gray-400 hover:text-error-400 hover:border-error-500/20 transition-all"
            title="Sign out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

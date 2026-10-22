import { useState } from 'react';
import {
  Server, Database, Network, Globe, Zap, BrainCircuit,
  ChevronRight, Lightbulb, ArrowLeft, BookOpen,
} from 'lucide-react';
import { CONCEPTS, CATEGORIES, LANGUAGES, type Concept, type LanguageCode } from '@/data/concepts';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Server, Database, Network, Globe, Zap, BrainCircuit,
};

type Props = {
  preferredLanguage: LanguageCode;
};

export function ConceptBrowser({ preferredLanguage }: Props) {
  const [selectedConcept, setSelectedConcept] = useState<Concept | null>(null);
  const [activeLanguage, setActiveLanguage] = useState<LanguageCode>(preferredLanguage);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered = activeCategory === 'all'
    ? CONCEPTS
    : CONCEPTS.filter((c) => c.category === activeCategory);

  const localLangs = LANGUAGES.filter((l) => l.isLocal);
  const intlLangs = LANGUAGES.filter((l) => !l.isLocal);

  if (selectedConcept) {
    return (
      <ConceptDetail
        concept={selectedConcept}
        activeLanguage={activeLanguage}
        onLanguageChange={setActiveLanguage}
        onBack={() => setSelectedConcept(null)}
      />
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Language switcher */}
      <div className="mb-8">
        <p className="text-sm text-gray-500 mb-3 flex items-center gap-2">
          <BookOpen className="w-4 h-4" /> Screen 1 — Local Languages
        </p>
        <div className="flex flex-wrap gap-2">
          {localLangs.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setActiveLanguage(lang.code)}
              className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
                activeLanguage === lang.code
                  ? 'bg-primary-600 text-white border-primary-500 shadow-lg shadow-primary-600/20'
                  : 'bg-midnight-200/50 text-gray-400 border-white/5 hover:border-primary-500/30 hover:text-white'
              }`}
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.nativeName}
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-500 mb-3 mt-5 flex items-center gap-2">
          <Globe className="w-4 h-4" /> Screen 2 — International Languages
        </p>
        <div className="flex flex-wrap gap-2">
          {intlLangs.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setActiveLanguage(lang.code)}
              className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
                activeLanguage === lang.code
                  ? 'bg-accent-600 text-white border-accent-500 shadow-lg shadow-accent-600/20'
                  : 'bg-midnight-200/50 text-gray-400 border-white/5 hover:border-accent-500/30 hover:text-white'
              }`}
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.nativeName}
            </button>
          ))}
        </div>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeCategory === 'all'
              ? 'bg-white/10 text-white'
              : 'text-gray-500 hover:text-white'
          }`}
        >
          All Topics
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeCategory === cat
                ? 'bg-white/10 text-white'
                : 'text-gray-500 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Concept cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((concept, i) => {
          const Icon = ICONS[concept.icon] ?? Server;
          const expl = concept.explanations[activeLanguage];
          return (
            <button
              key={concept.id}
              onClick={() => setSelectedConcept(concept)}
              style={{ animationDelay: `${i * 60}ms` }}
              className="group text-left bg-midnight-200/50 border border-white/5 rounded-2xl p-5 hover:border-primary-500/30 hover:bg-midnight-200/80 transition-all animate-fade-in-up opacity-0"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-primary-600/15 border border-primary-500/20 flex items-center justify-center group-hover:bg-primary-600/25 transition-all">
                  <Icon className="w-5 h-5 text-primary-400" />
                </div>
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
              </div>
              <span className="text-xs text-primary-400/60 font-medium uppercase tracking-wide">
                {concept.category}
              </span>
              <h3 className="text-white font-semibold mt-1 mb-2 line-clamp-2">
                {expl.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">
                {expl.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ConceptDetail({
  concept,
  activeLanguage,
  onLanguageChange,
  onBack,
}: {
  concept: Concept;
  activeLanguage: LanguageCode;
  onLanguageChange: (l: LanguageCode) => void;
  onBack: () => void;
}) {
  const expl = concept.explanations[activeLanguage];
  const Icon = ICONS[concept.icon] ?? Server;
  const lang = LANGUAGES.find((l) => l.code === activeLanguage)!;

  return (
    <div className="animate-fade-in">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-white mb-6 transition-all"
      >
        <ArrowLeft className="w-4 h-4" /> Back to all topics
      </button>

      {/* Language pills on detail */}
      <div className="flex flex-wrap gap-2 mb-6">
        {LANGUAGES.map((l) => (
          <button
            key={l.code}
            onClick={() => onLanguageChange(l.code)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
              activeLanguage === l.code
                ? l.isLocal
                  ? 'bg-primary-600 text-white border-primary-500'
                  : 'bg-accent-600 text-white border-accent-500'
                : 'bg-midnight-200/50 text-gray-400 border-white/5 hover:text-white'
            }`}
          >
            <span className="mr-1.5">{l.flag}</span>
            {l.nativeName}
          </button>
        ))}
      </div>

      <div className="bg-midnight-200/50 border border-white/5 rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-primary-600/15 border border-primary-500/20 flex items-center justify-center">
            <Icon className="w-7 h-7 text-primary-400" />
          </div>
          <div>
            <span className="text-xs text-primary-400/60 font-medium uppercase tracking-wide">
              {concept.category}
            </span>
            <h2 className="text-2xl font-bold text-white">{expl.title}</h2>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-300 leading-relaxed text-[15px]">
            {expl.description}
          </p>
        </div>

        <div className="bg-accent-600/10 border border-accent-500/20 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-accent-600/20 flex items-center justify-center shrink-0">
              <Lightbulb className="w-5 h-5 text-accent-400" />
            </div>
            <div>
              <p className="text-xs text-accent-400 font-semibold uppercase tracking-wide mb-1">
                Real-life analogy · {lang.nativeName}
              </p>
              <p className="text-gray-300 leading-relaxed text-[15px]">
                {expl.analogy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

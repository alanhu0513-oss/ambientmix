import { useState } from 'react';
import { Headphones } from 'lucide-react';
import SoundCard from './components/SoundCard';
import { sounds } from './utils/audioManager';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'nature', name: 'Nature' },
  { id: 'weather', name: 'Weather' },
  { id: 'water', name: 'Water' },
  { id: 'animals', name: 'Animals' },
  { id: 'indoor', name: 'Indoor' },
  { id: 'urban', name: 'Urban' },
  { id: 'transport', name: 'Transport' },
  { id: 'abstract', name: 'Noise' },
];

function App() {
  const [playingSounds, setPlayingSounds] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleToggle = (soundId: string, playing: boolean) => {
    setPlayingSounds(prev => {
      const next = new Set(prev);
      if (playing) {
        next.add(soundId);
      } else {
        next.delete(soundId);
      }
      return next;
    });
  };

  const filteredSounds = selectedCategory === 'all' 
    ? sounds 
    : sounds.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <header className="mb-16 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/[0.06] ring-1 ring-white/[0.1]">
              <Headphones size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                AmbientMix
              </h1>
              <p className="text-white/50 mt-1">
                Craft your perfect ambient soundscape
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {categories.map((cat, index) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm transition-all duration-200 whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? 'bg-white text-black font-medium'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.06]'
                  }`}
                  style={{ animation: `fadeIn 0.4s ease-out ${index * 0.03}s backwards` }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            
            <div className="text-sm text-white/40 tabular-nums">
              {filteredSounds.length} {filteredSounds.length === 1 ? 'sound' : 'sounds'}
              {playingSounds.size > 0 && (
                <span className="ml-2 text-emerald-400">
                  • {playingSounds.size} active
                </span>
              )}
            </div>
          </div>
        </header>

        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
            {filteredSounds.map((sound, index) => (
              <div 
                key={sound.id}
                style={{ animation: `fadeIn 0.4s ease-out ${index * 0.02}s backwards` }}
              >
                <SoundCard
                  sound={sound}
                  isPlaying={playingSounds.has(sound.id)}
                  onToggle={handleToggle}
                />
              </div>
            ))}
          </div>

          {filteredSounds.length === 0 && (
            <div className="text-center py-20 text-white/30">
              No sounds in this category
            </div>
          )}
        </main>

        <footer className="mt-24 pt-8 border-t border-white/[0.06] text-center">
          <p className="text-sm text-white/30">
            {sounds.length} ambient sounds • Web Audio API
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

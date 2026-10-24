import { useState } from 'react';
import { Headphones, Sparkles, Filter } from 'lucide-react';
import SoundCard from './components/SoundCard';
import { sounds } from './utils/audioManager';

const categories = [
  { id: 'all', name: 'All Sounds', icon: '🎵' },
  { id: 'nature', name: 'Nature', icon: '🌿' },
  { id: 'weather', name: 'Weather', icon: '🌧️' },
  { id: 'water', name: 'Water', icon: '🌊' },
  { id: 'animals', name: 'Animals', icon: '🦉' },
  { id: 'indoor', name: 'Indoor', icon: '🏠' },
  { id: 'urban', name: 'Urban', icon: '🏙️' },
  { id: 'transport', name: 'Transport', icon: '🚂' },
  { id: 'abstract', name: 'Noise', icon: '📻' },
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
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-black">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <header className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-2xl shadow-purple-500/30">
              <Headphones size={40} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            AmbientMix
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Massive sound library for focus, relaxation & creativity
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-white/50">
            <Sparkles size={16} />
            <span>{sounds.length} sounds • {playingSounds.size} {playingSounds.size === 1 ? 'playing' : 'playing'}</span>
          </div>
        </header>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          <div className="flex items-center gap-2 text-white/60 mr-2">
            <Filter size={18} />
            <span className="text-sm">Filter:</span>
          </div>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              <span className="mr-1.5">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSounds.map(sound => (
            <SoundCard
              key={sound.id}
              sound={sound}
              isPlaying={playingSounds.has(sound.id)}
              onToggle={handleToggle}
            />
          ))}
        </div>

        {filteredSounds.length === 0 && (
          <div className="text-center py-12 text-white/40">
            No sounds in this category
          </div>
        )}

        <footer className="text-center mt-16 text-white/40 text-sm">
          <p>Built with React, TypeScript, Tailwind CSS & Web Audio API • {sounds.length} sounds and growing</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

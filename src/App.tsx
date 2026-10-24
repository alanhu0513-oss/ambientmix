import { useState } from 'react';
import { Headphones, Sparkles } from 'lucide-react';
import SoundCard from './components/SoundCard';
import { sounds } from './utils/audioManager';

function App() {
  const [playingSounds, setPlayingSounds] = useState<Set<string>>(new Set());

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-black">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <header className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-2xl shadow-purple-500/30">
              <Headphones size={40} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            AmbientMix
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Mix ambient sounds to create your perfect focus environment
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-white/50">
            <Sparkles size={16} />
            <span>{playingSounds.size} {playingSounds.size === 1 ? 'sound' : 'sounds'} playing</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sounds.map(sound => (
            <SoundCard
              key={sound.id}
              sound={sound}
              isPlaying={playingSounds.has(sound.id)}
              onToggle={handleToggle}
            />
          ))}
        </div>

        <footer className="text-center mt-16 text-white/40 text-sm">
          <p>Built with React, TypeScript, Tailwind CSS & Web Audio API</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

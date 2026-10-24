import { useState } from 'react';
import * as Icons from 'lucide-react';
import type { Sound } from '../utils/audioManager';
import { audioManager } from '../utils/audioManager';

interface SoundCardProps {
  sound: Sound;
  isPlaying: boolean;
  onToggle: (soundId: string, playing: boolean) => void;
}

export default function SoundCard({ sound, isPlaying, onToggle }: SoundCardProps) {
  const [volume, setVolume] = useState(0.5);
  const [loaded, setLoaded] = useState(false);

  const Icon = (Icons as any)[sound.icon];

  const handleToggle = async () => {
    if (!loaded) {
      await audioManager.loadSound(sound.id, sound.url);
      setLoaded(true);
    }

    if (isPlaying) {
      audioManager.stop(sound.id);
      onToggle(sound.id, false);
    } else {
      await audioManager.play(sound.id);
      audioManager.setVolume(sound.id, volume);
      onToggle(sound.id, true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (isPlaying) {
      audioManager.setVolume(sound.id, newVolume);
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
      isPlaying 
        ? 'border-white/30 bg-gradient-to-br ' + sound.color + ' shadow-2xl shadow-purple-500/20 scale-105' 
        : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
    }`}>
      <div className="p-6">
        <button
          onClick={handleToggle}
          className="w-full flex items-center gap-4 mb-4"
        >
          <div className={`p-3 rounded-xl ${
            isPlaying ? 'bg-white/20' : 'bg-white/10'
          }`}>
            {Icon && <Icon size={28} className="text-white" />}
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-lg font-semibold text-white">{sound.name}</h3>
            <p className="text-sm text-white/60">
              {isPlaying ? 'Playing' : 'Click to play'}
            </p>
          </div>
          <div className={`w-3 h-3 rounded-full ${
            isPlaying ? 'bg-green-400 shadow-lg shadow-green-400/50 animate-pulse' : 'bg-white/30'
          }`} />
        </button>

        {isPlaying && (
          <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-center justify-between text-xs text-white/70">
              <span>Volume</span>
              <span>{Math.round(volume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        )}
      </div>
    </div>
  );
}

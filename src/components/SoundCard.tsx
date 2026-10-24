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

  const progress = volume * 100;

  return (
    <div 
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ease-out ${
        isPlaying 
          ? 'bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/20 shadow-[0_8px_32px_rgba(168,85,247,0.15)] scale-[1.02]' 
          : 'bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15] hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
      }`}
      style={{ animation: 'fadeIn 0.4s ease-out' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-5">
        <button
          onClick={handleToggle}
          className="w-full flex items-center gap-3.5 text-left"
        >
          <div className={`relative p-2.5 rounded-xl transition-all duration-300 ${
            isPlaying 
              ? 'bg-white/10 ring-1 ring-white/30' 
              : 'bg-white/[0.06] ring-1 ring-white/[0.08] group-hover:bg-white/[0.1] group-hover:ring-white/[0.15]'
          }`}>
            {Icon && <Icon size={22} className={`transition-colors duration-300 ${isPlaying ? 'text-white' : 'text-white/80'}`} />}
            {isPlaying && (
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse-glow" />
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className={`text-[15px] font-medium tracking-tight transition-colors duration-300 ${
              isPlaying ? 'text-white' : 'text-white/90 group-hover:text-white'
            }`}>
              {sound.name}
            </h3>
            <p className={`text-xs mt-0.5 transition-colors duration-300 ${
              isPlaying ? 'text-white/60' : 'text-white/40 group-hover:text-white/50'
            }`}>
              {isPlaying ? 'Now playing' : 'Click to mix'}
            </p>
          </div>
        </button>

        <div className={`overflow-hidden transition-all duration-500 ease-out ${
          isPlaying ? 'max-h-20 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] text-white/50">
              <span className="uppercase tracking-wider">Volume</span>
              <span className="tabular-nums">{Math.round(volume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-full slider"
              style={{ '--progress': `${progress}%` } as React.CSSProperties}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

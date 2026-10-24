export interface Sound {
  id: string;
  name: string;
  icon: string;
  url: string;
  color: string;
}

export const sounds: Sound[] = [
  { id: 'rain', name: 'Rain', icon: 'CloudRain', url: 'https://cdn.pixabay.com/audio/2022/05/13/audio_257112ce99.mp3', color: 'from-blue-500 to-cyan-500' },
  { id: 'thunder', name: 'Thunderstorm', icon: 'CloudLightning', url: 'https://cdn.pixabay.com/audio/2021/08/09/audio_dc39ab11d2.mp3', color: 'from-slate-500 to-indigo-500' },
  { id: 'fireplace', name: 'Fireplace', icon: 'Flame', url: 'https://cdn.pixabay.com/audio/2022/03/10/audio_c8c8a73467.mp3', color: 'from-orange-500 to-red-500' },
  { id: 'waves', name: 'Ocean Waves', icon: 'Waves', url: 'https://cdn.pixabay.com/audio/2022/06/13/audio_46bfd53711.mp3', color: 'from-teal-500 to-blue-500' },
  { id: 'cafe', name: 'Coffee Shop', icon: 'Coffee', url: 'https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3', color: 'from-amber-500 to-yellow-600' },
  { id: 'forest', name: 'Forest Birds', icon: 'Trees', url: 'https://cdn.pixabay.com/audio/2022/03/09/audio_107b8e7ca9.mp3', color: 'from-green-500 to-emerald-500' },
  { id: 'wind', name: 'Wind', icon: 'Wind', url: 'https://cdn.pixabay.com/audio/2022/03/10/audio_270b0958a5.mp3', color: 'from-gray-400 to-slate-500' },
  { id: 'whitenoise', name: 'White Noise', icon: 'Radio', url: 'https://cdn.pixabay.com/audio/2021/09/06/audio_15f4051f3f.mp3', color: 'from-purple-500 to-pink-500' },
];

export class AudioManager {
  private audioContext: AudioContext | null = null;
  private sources: Map<string, AudioBufferSourceNode> = new Map();
  private gains: Map<string, GainNode> = new Map();
  private buffers: Map<string, AudioBuffer> = new Map();

  constructor() {
    if (typeof window !== 'undefined') {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  async loadSound(soundId: string, url: string): Promise<void> {
    if (!this.audioContext) return;
    if (this.buffers.has(soundId)) return;

    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
      this.buffers.set(soundId, audioBuffer);
    } catch (error) {
      console.error(`Failed to load sound ${soundId}:`, error);
    }
  }

  async play(soundId: string): Promise<void> {
    if (!this.audioContext) return;
    
    if (this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }

    if (this.sources.has(soundId)) return;

    const buffer = this.buffers.get(soundId);
    if (!buffer) return;

    const source = this.audioContext.createBufferSource();
    const gainNode = this.audioContext.createGain();
    
    source.buffer = buffer;
    source.loop = true;
    gainNode.gain.value = 0.5;
    
    source.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    source.start(0);
    
    this.sources.set(soundId, source);
    this.gains.set(soundId, gainNode);
  }

  stop(soundId: string): void {
    const source = this.sources.get(soundId);
    if (source) {
      try {
        source.stop();
      } catch (e) {}
      source.disconnect();
      this.sources.delete(soundId);
    }
    this.gains.delete(soundId);
  }

  setVolume(soundId: string, volume: number): void {
    const gainNode = this.gains.get(soundId);
    if (gainNode && this.audioContext) {
      gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
    }
  }

  isPlaying(soundId: string): boolean {
    return this.sources.has(soundId);
  }
}

export const audioManager = new AudioManager();

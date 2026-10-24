export interface Sound {
  id: string;
  name: string;
  icon: string;
  url: string;
  color: string;
  category: 'nature' | 'urban' | 'indoor' | 'weather' | 'abstract' | 'animals' | 'transport' | 'water';
}

export const sounds: Sound[] = [
  // Nature
  { id: 'rain', name: 'Rain', icon: 'CloudRain', url: 'https://cdn.pixabay.com/audio/2022/05/13/audio_257112ce99.mp3', color: 'from-blue-500 to-cyan-500', category: 'weather' },
  { id: 'thunder', name: 'Thunderstorm', icon: 'CloudLightning', url: 'https://cdn.pixabay.com/audio/2021/08/09/audio_dc39ab11d2.mp3', color: 'from-slate-600 to-indigo-600', category: 'weather' },
  { id: 'heavy-rain', name: 'Heavy Rain', icon: 'CloudRainWind', url: 'https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3', color: 'from-blue-600 to-indigo-600', category: 'weather' },
  { id: 'forest', name: 'Forest Birds', icon: 'Bird', url: 'https://cdn.pixabay.com/audio/2022/03/09/audio_107b8e7ca9.mp3', color: 'from-green-500 to-emerald-500', category: 'nature' },
  { id: 'jungle', name: 'Jungle Ambience', icon: 'TreePine', url: 'https://cdn.pixabay.com/audio/2022/01/18/audio_9b1b9b0b0b.mp3', color: 'from-emerald-600 to-green-700', category: 'nature' },
  { id: 'crickets', name: 'Crickets at Night', icon: 'Bug', url: 'https://cdn.pixabay.com/audio/2022/01/18/audio_6c6c6c6c6c.mp3', color: 'from-green-700 to-teal-800', category: 'animals' },
  { id: 'owl', name: 'Owl Hooting', icon: 'Moon', url: 'https://cdn.pixabay.com/audio/2022/03/10/audio_4a5a5a5a5a.mp3', color: 'from-indigo-700 to-purple-800', category: 'animals' },
  { id: 'wolf', name: 'Wolf Howling', icon: 'MoonStar', url: 'https://cdn.pixabay.com/audio/2021/08/09/audio_12b0c7443c.mp3', color: 'from-slate-700 to-gray-800', category: 'animals' },
  
  // Water
  { id: 'waves', name: 'Ocean Waves', icon: 'Waves', url: 'https://cdn.pixabay.com/audio/2022/06/13/audio_46bfd53711.mp3', color: 'from-teal-500 to-blue-500', category: 'water' },
  { id: 'beach', name: 'Beach Shore', icon: 'Umbrella', url: 'https://cdn.pixabay.com/audio/2021/08/09/audio_19010b4bff.mp3', color: 'from-cyan-400 to-blue-500', category: 'water' },
  { id: 'river', name: 'Flowing River', icon: 'Droplets', url: 'https://cdn.pixabay.com/audio/2022/02/07/audio_5981d73e23.mp3', color: 'from-blue-400 to-cyan-600', category: 'water' },
  { id: 'waterfall', name: 'Waterfall', icon: 'Droplet', url: 'https://cdn.pixabay.com/audio/2022/01/18/audio_53a6e3a11b.mp3', color: 'from-cyan-500 to-teal-600', category: 'water' },
  
  // Indoor
  { id: 'fireplace', name: 'Fireplace', icon: 'Flame', url: 'https://cdn.pixabay.com/audio/2022/03/10/audio_c8c8a73467.mp3', color: 'from-orange-500 to-red-500', category: 'indoor' },
  { id: 'cafe', name: 'Coffee Shop', icon: 'Coffee', url: 'https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3', color: 'from-amber-500 to-yellow-600', category: 'urban' },
  { id: 'library', name: 'Library Ambience', icon: 'BookOpen', url: 'https://cdn.pixabay.com/audio/2021/08/09/audio_b4b1946479.mp3', color: 'from-amber-700 to-orange-800', category: 'indoor' },
  { id: 'keyboard', name: 'Typing on Keyboard', icon: 'Keyboard', url: 'https://cdn.pixabay.com/audio/2022/03/15/audio_942138e7c0.mp3', color: 'from-gray-500 to-slate-600', category: 'indoor' },
  { id: 'fan', name: 'Ceiling Fan', icon: 'Fan', url: 'https://cdn.pixabay.com/audio/2021/09/06/audio_9fda03e156.mp3', color: 'from-blue-300 to-cyan-400', category: 'indoor' },
  
  // Urban
  { id: 'city', name: 'City Traffic', icon: 'Car', url: 'https://cdn.pixabay.com/audio/2022/01/18/audio_166f1e32e0.mp3', color: 'from-gray-600 to-slate-700', category: 'urban' },
  { id: 'train', name: 'Train Passing', icon: 'Train', url: 'https://cdn.pixabay.com/audio/2022/03/10/audio_0e7f0f0f0f.mp3', color: 'from-blue-700 to-indigo-800', category: 'transport' },
  { id: 'airplane', name: 'Airplane Cabin', icon: 'Plane', url: 'https://cdn.pixabay.com/audio/2021/08/09/audio_0625c1539c.mp3', color: 'from-sky-500 to-blue-600', category: 'transport' },
  { id: 'subway', name: 'Subway Station', icon: 'TrainFront', url: 'https://cdn.pixabay.com/audio/2022/01/18/audio_1a1a1a1a1a.mp://cdn.pixabay.com/audio/2022/01/18/', color: 'from-slate-600 to-gray-700', category: 'transport' },
  { id: 'street', name: 'Busy Street', icon: 'Building', url: 'https://cdn.pixabay.com/audio/2021/08/09/audio_978b3b8b45.mp3', color: 'from-orange-600 to-red-700', category: 'urban' },
  
  // Abstract
  { id: 'whitenoise', name: 'White Noise', icon: 'Radio', url: 'https://cdn.pixabay.com/audio/2021/09/06/audio_15f4051f3f.mp3', color: 'from-purple-500 to-pink-500', category: 'abstract' },
  { id: 'brownnoise', name: 'Brown Noise', icon: 'Activity', url: 'https://cdn.pixabay.com/audio/2022/01/18/audio_0c6c6c6c6c.mp3', color: 'from-amber-800 to-brown-900', category: 'abstract' },
  { id: 'pinknoise', name: 'Pink Noise', icon: 'BarChart3', url: 'https://cdn.pixabay.com/audio/2021/09/06/audio_8f8f8f8f8f.mp3', color: 'from-pink-600 to-rose-700', category: 'abstract' },
  { id: 'space', name: 'Deep Space', icon: 'Sparkles', url: 'https://cdn.pixabay.com/audio/2022/03/15/audio_270b0958a5.mp3', color: 'from-violet-600 to-purple-800', category: 'abstract' },
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

  getAudioContext(): AudioContext | null {
    return this.audioContext;
  }
}

export const audioManager = new AudioManager();

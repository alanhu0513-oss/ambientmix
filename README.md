# AmbientMix

A beautiful web app for mixing ambient sounds to create your perfect focus environment. Combine rain, fireplace, cafe chatter, ocean waves, and more with intuitive volume controls.

## Features

- **Mix multiple sounds** - Play several ambient sounds simultaneously
- **Individual volume control** - Fine-tune each sound to your preference
- **Beautiful UI** - Clean, modern dark interface with smooth animations
- **No accounts needed** - Just open and mix
- **Powered by Web Audio API** - Seamless audio looping with no gaps

## Tech Stack

- [Vite](https://vitejs.dev/) - Lightning fast build tool
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [Lucide React](https://lucide.dev/) - Beautiful icons

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## How It Works

AmbientMix uses the Web Audio API to load and play ambient sound loops. Each sound has its own GainNode for independent volume control, allowing you to create custom mixes.

## License

MIT

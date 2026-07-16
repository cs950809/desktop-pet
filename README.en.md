# 🎮 desktop-pet

English | [简体中文](./README.md)

A Pokémon pet that lives on your desktop. 10 classic characters to switch between, autonomous behavior, context-aware dialogue, click-through, draggable.

⭐ **If you like this project, please give it a Star!** ⭐

## ✨ Features

- 🎭 **10 Characters** — Psyduck, Pikachu, Eevee, Jigglypuff, Snorlax, Charmander, Bulbasaur, Squirtle, Weezing, Mewtwo
- 🏃 **Unique Movement** — Each moves differently: Pikachu bounces, Snorlax is super lazy, Eevee darts around, Mewtwo floats…
- 💬 **Context Dialogue** — Senses weather / solar terms / festivals / time of day; also recites poetry, lyrics, and internet memes
- 🖱️ **Click-Through** — Clicks outside the pet pass through to the desktop
- ✋ **Free Drag** — Hold left-click to drag anywhere
- 🗂️ **Tray Switch** — Pokéball icon, right-click to pick a character (each with its own avatar)
- 🔄 **Periodic Updates** — Context lines refresh weekly, trending memes refresh monthly; works offline with cached phrases

## 📦 Download

Go to the [Releases page](../../releases) for the latest version:
- **Windows** → `desktop-pet-Setup-x.x.x.exe`
- **macOS** → `desktop-pet-x.x.x-arm64.dmg` (Apple Silicon)

> You can also download from the [Actions](../../actions) Artifacts if no release exists yet.

### First Launch on macOS
The app is unsigned and may be blocked. **Right-click the app → "Open" → Confirm**.

## 🎮 Usage

| Action | Effect |
|--------|--------|
| Hold left-click and drag | Move the pet |
| Right-click tray Pokéball | Switch character / Quit |

## 🔧 Run Locally

```bash
git clone https://github.com/cs950809/desktop-pet.git
cd desktop-pet
npm install
npm start
```

### Build
```bash
npx electron-builder --win     # Windows
npx electron-builder --mac     # macOS (must run on a Mac)
```

## 🤝 Contributing

Forks and contributions are welcome! If this project helps you:
- Keep the original author attribution
- Link back to this repository in your README
- Issues and Pull Requests are welcome

## 📄 License

- **Code**: [MIT License](./LICENSE) — free to use, modify, and distribute
- **Character images**: Pokémon © The Pokémon Company / Nintendo / Game Freak. This project is for personal learning and entertainment only — **no commercial use**

## 🙏 Acknowledgements

- Character sprites from [PokeAPI](https://github.com/PokeAPI/sprites)
- Weather data from [wttr.in](https://wttr.in)
- Built with [Electron](https://www.electronjs.org/)

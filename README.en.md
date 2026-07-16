# 🎮 desktop-pet

English | [简体中文](./README.md)

A Pokémon pet that lives on your desktop. 10 classic characters to switch between, autonomous behavior, context-aware dialogue, click-through, draggable.

![Pet](./pokeball.png)

## ✨ Features

- 🎭 **10 Characters** — Psyduck, Pikachu, Eevee, Jigglypuff, Snorlax, Charmander, Bulbasaur, Squirtle, Weezing, Mewtwo
- 🏃 **Unique Movement** — Each moves differently: Pikachu bounces, Snorlax is super lazy, Eevee darts around, Mewtwo floats…
- 💬 **Context Dialogue** — Senses weather / solar terms / festivals / time of day; also recites poetry, lyrics, and internet memes
- 🖱️ **Click-Through** — Clicks outside the pet pass through to the desktop
- ✋ **Free Drag** — Hold left-click to drag anywhere
- 🗂️ **Tray Switch** — Pokéball icon, right-click to pick a character (each with its own avatar)
- 🔄 **Weekly Refresh** — Context lines update weekly; works offline with cached phrases

## 📦 Download

Go to [Actions](../../actions) → pick the latest successful build → download from Artifacts:
- `desktop-pet-Windows` → Windows exe
- `desktop-pet-Mac` → macOS dmg (Apple Silicon)

## 🎮 Usage

| Action | Effect |
|--------|--------|
| Hold left-click & drag | Move the pet |
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

## 🛠️ Tech

Electron + transparent window `setIgnoreMouseEvents(forward)` for click-through; wttr.in for weather; local cache for context lines.

## 📄 License

For learning purposes only. Pokémon characters © The Pokémon Company.

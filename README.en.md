# 🦆 Psyduck Desktop Pet

English | [简体中文](./README.md)

A Psyduck that wanders around your desktop. Transparent window, click-through, draggable, tray exit — the full desktop pet experience.

![Psyduck](./duck.png)

## ✨ Features

- 🖼️ **Transparent Background** — The duck floats on your desktop without blocking the wallpaper
- 🖱️ **Click-Through** — Clicks outside the duck pass straight through to the desktop
- ✋ **Free Drag** — Hold left-click to drag the duck anywhere
- 🤸 **Autonomous Behavior** — The duck walks, jumps, thinks, idles, and sleeps on its own
- 💬 **Speech Bubbles** — Randomly says things like "Quack!" or "Hmm..."
- 📌 **Edge Snap** — Drag to a screen edge and it snaps, showing only its head
- 🗑️ **Tray Exit** — No taskbar entry; right-click the tray icon to quit

## 📦 Download & Install

### Windows
1. Go to [Releases](../../releases) and download the latest `Psyduck Setup x.x.x.exe`
2. Double-click to install
3. Launch "Psyduck" from the Start Menu

### macOS
1. Go to [Releases](../../releases) and download `Psyduck-x.x.x.dmg`
2. Open the dmg and drag "Psyduck" into "Applications"
3. **First launch**: Right-click the app → "Open" → Confirm (required for unsigned apps)

## 🎮 Usage

| Action | Effect |
|--------|--------|
| Hold left-click & drag | Move the duck |
| Move mouse away | Duck acts on its own (walk/jump/sleep) |
| Drag to screen edge | Snaps, shows only the head |
| Hover near a snapped duck | Slides back out |
| Right-click tray icon → Quit | Close the app |

## 🔧 Build from Source

### Prerequisites
- [Node.js](https://nodejs.org/) 18+

### Run Locally
```bash
git clone https://github.com/cs950809/desktop-pet.git
cd desktop-pet
npm install
npm start
```

### Package
```bash
# Windows
npx electron-builder --win

# macOS (must run on a Mac)
npx electron-builder --mac
```

Output goes to the `dist/` directory.

## 🛠️ Tech Stack

- **[Electron](https://www.electronjs.org/)** — Cross-platform desktop framework
- **Transparent window + `setIgnoreMouseEvents(forward)`** — Core click-through mechanism
- **HTML/CSS/JS** — The duck itself and its animations

## 📄 License

This project is for learning and communication purposes only. Psyduck is a character owned by The Pokémon Company; all related image copyrights belong to the original rights holders.

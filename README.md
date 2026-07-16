# 🎮 desktop-pet

[English](./README.en.md) | 简体中文

一只会出现在你桌面的宝可梦宠物。10 个经典角色可切换、自动活动、情境台词、点击穿透、可拖拽。

![角色](./pokeball.png)

## ✨ 功能

- 🎭 **10 个角色** — 可达鸭、皮卡丘、伊布、胖丁、卡比兽、小火龙、妙蛙种子、杰尼龟、双弹瓦斯、超梦
- 🏃 **个性移动** — 每个角色移动方式不同:皮卡丘爱跳、卡比兽超懒、伊布乱窜、超梦漂浮…
- 💬 **情境台词** — 自动感知天气/节气/节日/时段,还会说诗词、歌词、网络热梗
- 🖱️ **点击穿透** — 鸭子以外区域点击直达桌面
- ✋ **自由拖拽** — 按住左键拖到任意位置
- 🗂️ **托盘切换** — 精灵球图标,右键选角色,每个角色带自己的小头像
- 🔄 **每周更新** — 情境台词每周刷新,无网络也能用本地词库

## 📦 下载

前往 [Actions 构建页](../../actions) → 选最新成功的构建 → 下方 Artifacts 下载:
- `desktop-pet-Windows` → Windows exe
- `desktop-pet-Mac` → macOS dmg(Apple Silicon)

## 🎮 使用

| 操作 | 效果 |
|------|------|
| 按住左键拖动 | 移动角色 |
| 右键托盘精灵球 | 切换角色 / 退出 |

## 🔧 本地运行

```bash
git clone https://github.com/cs950809/desktop-pet.git
cd desktop-pet
npm install
npm start
```

### 打包
```bash
npx electron-builder --win     # Windows
npx electron-builder --mac     # macOS(需在 Mac 上)
```

## 🛠️ 技术

Electron + 透明窗口 `setIgnoreMouseEvents(forward)` 实现点击穿透;wttr.in 获取天气;本地缓存情境台词。

## 📄 许可

仅供学习交流。宝可梦角色版权归 The Pokémon Company。

# 🎮 desktop-pet

[English](./README.en.md) | 简体中文

一只会出现在你桌面的宝可梦宠物。10 个经典角色可切换、自动活动、情境台词、点击穿透、可拖拽。

⭐ **如果喜欢这个项目，欢迎点个 Star 支持一下！** ⭐

## ✨ 功能

- 🎭 **10 个角色** — 可达鸭、皮卡丘、伊布、胖丁、卡比兽、小火龙、妙蛙种子、杰尼龟、双弹瓦斯、超梦
- 🏃 **个性移动** — 每个角色移动方式不同:皮卡丘爱跳、卡比兽超懒、伊布乱窜、超梦漂浮…
- 💬 **情境台词** — 自动感知天气/节气/节日/时段,还会说诗词、歌词、网络热梗
- 🖱️ **点击穿透** — 鸭子以外区域点击直达桌面
- ✋ **自由拖拽** — 按住左键拖到任意位置
- 🗂️ **托盘切换** — 精灵球图标,右键选角色,每个角色带自己的小头像
- 🔄 **定期更新** — 情境台词每周刷新、网络热梗每月更新,无网络也能用本地词库

## 📦 下载

前往 [Releases 发布页](../../releases) 下载最新版本:
- **Windows** → `desktop-pet-Setup-x.x.x.exe`
- **macOS** → `desktop-pet-x.x.x-arm64.dmg`(Apple Silicon)

> 没有正式版时,也可从 [Actions 构建记录](../../actions) 的 Artifacts 下载。

### macOS 首次打开
应用未签名,双击可能被拦截。请:**右键点击 app →「打开」→ 确认**。

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

## 🤝 二次开发

欢迎 Fork 和二次开发!如果本项目对你有帮助,建议:
- 保留原作者出处信息
- 在你的项目 README 中引用本仓库链接
- 欢迎提交 Issue 和 Pull Request

## 📄 许可

- **代码**: [MIT License](./LICENSE) — 自由使用、修改、分发
- **角色形象**: 宝可梦(Pokémon)版权归 The Pokémon Company / Nintendo / Game Freak 所有,本项目仅供个人学习娱乐,**不得商用**

## 🙏 致谢

- 角色素材来自 [PokeAPI](https://github.com/PokeAPI/sprites)
- 天气数据来自 [wttr.in](https://wttr.in)
- 基于 [Electron](https://www.electronjs.org/) 构建

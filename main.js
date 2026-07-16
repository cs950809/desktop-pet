const { app, BrowserWindow, screen, Tray, Menu, nativeImage, ipcMain } = require('electron');
const path = require('path');

let win, tray;

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().size;
  win = new BrowserWindow({
    width, height, x: 0, y: 0,
    frame: false, transparent: true, resizable: false,
    alwaysOnTop: true, skipTaskbar: true, hasShadow: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    }
  });
  // 默认穿透(但转发鼠标事件,让页面能检测进入鸭子)
  win.setIgnoreMouseEvents(true, { forward: true });

  win.loadFile(path.join(__dirname, 'duck_offline.html'));

  win.webContents.on('did-finish-load', () => {
    // 注入一次(非轮询):透明背景+初始位置+鼠标穿透控制+暂停走路
    win.webContents.executeJavaScript(`
      document.documentElement.style.background='transparent';
      document.body.style.background='transparent';
      const duck=document.getElementById('pet');
      if(duck){
        duck.style.left=(window.innerWidth-180)+'px';
        duck.style.top=(window.innerHeight-180)+'px';
      }
      // 暂停鸭子自动走路(避免和拖拽/穿透冲突)
      window.__noAct=1;
      if(typeof window.decide==='function'){
        var _od=window.decide;
        window.decide=function(){ if(window.__noAct) return; return _od&&_od(); };
      }
      // 鼠标穿透控制:setIgnoreMouseEvents(forward)下页面能收mousemove
      // 鼠标在鸭子上 → 取消穿透(可拖); 否则穿透(点桌面)
      let curIgnore=true;
      document.addEventListener('mousemove',(e)=>{
        const el=document.elementFromPoint(e.clientX,e.clientY);
        const onDuck=!!(el && el.closest && el.closest('#pet'));
        if(onDuck && curIgnore){ curIgnore=false; window.petAPI.setIgnoreMouse(false); }
        else if(!onDuck && !curIgnore){ curIgnore=true; window.petAPI.setIgnoreMouse(true); }
      },true);
    `).catch(()=>{});
  });

  // IPC:页面请求切换穿透
  ipcMain.on('set-ignore-mouse', (event, ignore) => {
    if (!win.isDestroyed()) {
      win.setIgnoreMouseEvents(ignore, { forward: true });
    }
  });
  ipcMain.on('get-initial-pos', (event) => {
    event.returnValue = null;
  });

  win.on('closed', () => { win = null; });
}

function createTray() {
  const iconPath = path.join(__dirname, 'duck.ico');
  let img;
  try { img = nativeImage.createFromPath(iconPath); } catch {}
  if (!img || img.isEmpty()) img = nativeImage.createEmpty();
  tray = new Tray(img);
  tray.setToolTip('可达鸭');
  tray.setContextMenu(Menu.buildFromTemplate([
    { label: '可达鸭桌面宠物', enabled: false },
    { type: 'separator' },
    { label: '退出', click: () => app.quit() }
  ]));
}

app.whenReady().then(() => {
  createWindow();
  createTray();
});
app.on('window-all-closed', () => app.quit());

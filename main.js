//Import libraries
const { app, BrowserWindow } = require('electron');
const path = require('path');
const { ipcMain } = require('electron');
const Module = require('./moduleclass.js');

//Create the ModuleManager module
ModuleManager = new Module(1920, 1080, "./MODARP.html");


//Set Window Parameters
app.whenReady().then(() => {
  const win = new BrowserWindow({
  width: ModuleManager.getWidth(),
  height: ModuleManager.getHeight(),
  webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  //Event handlers to send information to front-end
  ipcMain.handle('PING', () => 'PONG');
  ipcMain.handle('PONG', () => 'PING');
  //Open html file for display
  win.loadFile(ModuleManager.getFile());
  //Create window and display
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }

  });
  });

//Handle window close
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

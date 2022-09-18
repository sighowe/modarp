//Import libraries
const { app, BrowserWindow } = require('electron');
const path = require('path');
const { ipcMain } = require('electron');

//Create the ModuleManager module


//Set Window Parameters
app.whenReady().then(() => {
  const win = new BrowserWindow({
  width: 1920,
  height: 1080,
  webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  //Event handlers to send information to front-end
  ipcMain.handle('PING', () => 'PONG');
  ipcMain.handle('PONG', () => 'PING');
  //Open html file for display
  win.loadFile('./MODARP.html');
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

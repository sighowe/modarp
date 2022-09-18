//Import libraries
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
var fs = require('fs');

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
  //Open html file for display
  win.loadFile('./MODARP.html');
  //Create window and display
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }

  });
  });

//Handle Element events

//Save
ipcMain.on("saveText", (event, txtVal) => {
  fs.writeFile("./text.txt", txtVal.toString(), (err) =>{
    if(!err){
      console.log("file saved!");
    }
    else {
      console.log(err);
    }
  });
});

//Load





//Handle window close
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

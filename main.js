//Import libraries
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
var fs = require('fs');


//Set Window Parameters
app.whenReady().then(() => {
  const win = new BrowserWindow({
  width: 1920,
  height: 1080,
  webPreferences: {
      preload: path.join(__dirname, './src/preload.js'),
      nodeIntegration: true
    },
  });
  //Event handlers to send information to front-end
  //Open html file for display
  win.loadFile('./src/index.html');
  //Create window and display
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }});






    //Handle Element events

  //Default page is page 1 of default notebook
  let currentFile = "./usernotes/default/";

  //Save info
  ipcMain.on("saveText", (event, page, data) => {
    fs.writeFile(currentFile + page + ".json", data, (err) =>{
      if(err){
        console.log(err);
      }
    });
  });
    //Read info
    ipcMain.on("loadText", (event, page) => {
      //MAKE NEW FILE IF DNE
      fs.exists(currentFile + page + ".json", (exists) => {
        if(!exists){
          fs.writeFile(currentFile + page + ".json", '', (err, data) => {
      })}});
      //read file and return information
      let rawData = fs.readFileSync(currentFile + page + ".json");
      if(rawData != ""){
        win.webContents.send("recieveText", JSON.parse(rawData));
      }
      else{
        win.webContents.send("recieveText", null);
      }
    });


    //Change file
    ipcMain.on("changeFile", (event, data) => {
      currentFile = data;
      console.log("CurrentFile Changed to " + data);
    });
});



//Handle window close
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

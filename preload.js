const { contextBridge, ipcRenderer } = require('electron');

//Randomize Ping Message
if(Math.random() > 0.5){
  pingMessage = "PONG";
}
else {
  pingMessage = "PING";
}


contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke(pingMessage),
});

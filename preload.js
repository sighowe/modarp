const { contextBridge, ipcRenderer } = require('electron');

let notePadContent = "Test";
//Wait for page to load in
document.addEventListener('DOMContentLoaded', function(){


  //find and label all relevant site content
  let saveButton = document.getElementById("saveButton");
  let prevButton = document.getElementById("prevButton");
  let nextButton = document.getElementById("nextButton");
  let notePad = document.getElementById("notepad");


  //Add button to save notePadContent to file
  saveButton.addEventListener("click", () => {
    notePadContent = notePad.getContents();
    ipcRenderer.send("saveText", notePadContent);
  })

});

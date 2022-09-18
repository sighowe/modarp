//import all libraries
const { contextBridge, ipcRenderer } = require('electron');
const Quill = require('../node_modules/quill/dist/quill.js');
const CalEvent = require("./calEvent.js");

//Wait for page to load in
document.addEventListener('DOMContentLoaded', function(){

  //Initialise variables
  let notePadContent = "";
  let currentPage = 1;

  //find and label all relevant site content
  var notePad = new Quill('#notepad', {
    placeholder: 'THIS PAGE IS EMPTY, WRITE SOMETHING HERE!',
    theme: 'bubble',
  });
  let saveButton = document.getElementById("saveButton");
  let prevButton = document.getElementById("prevButton");
  let nextButton = document.getElementById("nextButton");
  let changeButton = document.getElementById("changeButton");


  //Add functionality to saveButton
  saveButton.addEventListener("click", () => {
    let notePadContent = notePad.getContents();
    ipcRenderer.send("saveText", currentPage, JSON.stringify(notePad.getContents()));
  });

  //Add functionality to nextButton
  nextButton.addEventListener("click", () =>{
    ipcRenderer.send("saveText", currentPage, JSON.stringify(notePad.getContents()));
    currentPage ++;
    ipcRenderer.send("loadText", currentPage);
  });


  //Add load functionality
  prevButton.addEventListener("click", () =>{
    ipcRenderer.send("saveText", currentPage, JSON.stringify(notePad.getContents()));
    if(currentPage > 1){
      currentPage --;
    }
    ipcRenderer.send("loadText", currentPage);
  });


  ipcRenderer.on("recieveText", (event, data) => {
    notePad.setContents(data);
    console.log(data);
  });

  //Initialize Notebook content
  ipcRenderer.send("loadText", currentPage);


});

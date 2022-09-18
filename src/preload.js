//import all libraries
const { contextBridge, ipcRenderer } = require('electron');
const Quill = require('../node_modules/quill/dist/quill.js');


//Wait for page to load in
document.addEventListener('DOMContentLoaded', function(){

  //Initialise variables
  let notePadContent = "";

  //find and label all relevant site content
  var notePad = new Quill('#notepad', {
    modules: {
      toolbar: [
        ['bold', 'italic'],
        ['link', 'blockquote', 'code-block', 'image'],
        [{ list: 'ordered' }, { list: 'bullet' }]
      ]
    },
    placeholder: 'WELCOME TO YOUR NOTEBOOK, WRITE SOMETHING HERE!',
    theme: 'snow'
  });
  let saveButton = document.getElementById("saveButton");
  let prevButton = document.getElementById("prevButton");
  let nextButton = document.getElementById("nextButton");
  let changeButton = document.getElementById("changeButton");


  //Add functionality to saveButton
  saveButton.addEventListener("click", () => {
    let notePadContent = notePad.getContents();
    ipcRenderer.send("saveText", JSON.stringify(notePad.getContents()));
  })

  //Add functionality to loadButton
  //// TODO:


});

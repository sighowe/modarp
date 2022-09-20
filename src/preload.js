//import all libraries
const { contextBridge, ipcRenderer } = require('electron');
const Quill = require('../node_modules/quill/dist/quill.js');

//Wait for page to load in
document.addEventListener('DOMContentLoaded', function(){

  //Initialise variables
  let notePadContent = "";
  let currentPage = 1;
  const eventList = [];
  const eventListTimeline = [];

  //find and label all relevant site content
  var notePad = new Quill('#notepad', {
    placeholder: 'THIS PAGE IS EMPTY, WRITE SOMETHING HERE!',
    theme: 'bubble',
  });
  let saveButton = document.getElementById("saveButton");
  let prevButton = document.getElementById("prevButton");
  let nextButton = document.getElementById("nextButton");
  let changeButton = document.getElementById("changeButton");
  let scheduleBox = document.getElementById("suggestbox");
  let timeBox = document.getElementById("timeline");

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

  //Initialize eventList[] with a bunch of dummy text
  function addEvent(type, day, month, year, hour, minute, content, association){
    let newEvent = [];
    newEvent[0] = content;
    newEvent[1] = day;
    newEvent[2] = month;
    newEvent[3] = year;
    newEvent[4] = association;
    newEvent[5] = null;
    newEvent[6] = hour;
    newEvent[7] = minute
    newEvent[8] = type;
    eventList.push(newEvent);
  }
  function addEventTimeline(type, day, month, year, hour, minute, content, association){
    let newEvent = [];
    newEvent[0] = content;
    newEvent[1] = day;
    newEvent[2] = month;
    newEvent[3] = year;
    newEvent[4] = association;
    newEvent[5] = null;
    newEvent[6] = hour;
    newEvent[7] = minute
    newEvent[8] = type;
    eventListTimeline.push(newEvent);
  }

  addEvent("deadline", 20, 9, 2022, 18, 0, "Pitch for MODARP", ["default", 1]);
  addEvent("event", 21, 9, 2022, 1, 30, "Review ーて form notes", ["default", 1]);
  addEvent("event", 21, 9, 2099, 12, 0, "\"Example Event\"", ["default", 1]);



  addEventTimeline("event", 21, 9, 2099, 12, 0, "\"Example Event\"", ["default", 1]);
  addEventTimeline("event", 21, 9, 2099, 12, 0, "\"Example Event\"", ["default", 1]);
  addEventTimeline("event", 21, 9, 2099, 12, 0, "\"Example Event\"", ["default", 1]);
  addEventTimeline("event", 21, 9, 2099, 12, 0, "\"Example Event\"", ["default", 1]);
  addEventTimeline("event", 21, 9, 2099, 12, 0, "\"Example Event\"", ["default", 1]);
  addEventTimeline("event", 21, 9, 2099, 12, 0, "\"Example Event\"", ["default", 1]);
  addEventTimeline("deadline", 21, 9, 9999, 12, 0, "\"Example Deadline\" Witness the end of the world", ["default", 1]);
  addEventTimeline("deadline-completed", 19, 9, 2022, 23, 59, "Submit files for hackathon", ["default", 1]);
  addEventTimeline("deadline-completed", 19, 9, 2022, 1, 55, "Japanese writing test", ["default", 1]);

  //Populate display with all events stored in eventList[]
  for(var x = 0; x < eventList.length; x++){
    let child = document.createElement("div");
    eventList[x][5] = scheduleBox.appendChild(child);
    eventList[x][5].classList.add("schedule-event");
    child = document.createElement("div");
    child.classList.add("date");
    child.innerHTML = eventList[x][1] + "/" + eventList[x][2] + "/" + eventList[x][3];
    if(eventList[x][6] < 10){
      child.innerHTML += " 0" + eventList[x][6] + ":"
    }
    else {
      child.innerHTML += " " + eventList[x][6] + ":"
    }
    if(eventList[x][7] < 10){
       child.innerHTML += "0" + eventList[x][7];
    }
    else{
      child.innerHTML += eventList[x][7];
    }
    eventList[x][5].appendChild(child);
    child = document.createElement("div");
    child.classList.add("event-content");
    child.innerHTML = eventList[x][0];
    eventList[x][5].appendChild(child);
    eventList[x][5].classList.add(eventList[x][8]);
  }
  for(var x = 0; x < eventListTimeline.length; x++){
    let child = document.createElement("div");
    eventListTimeline[x][5] = timeBox.appendChild(child);
    eventListTimeline[x][5].classList.add("schedule-event");
    child = document.createElement("div");
    child.classList.add("date");
    child.innerHTML = eventListTimeline[x][1] + "/" + eventListTimeline[x][2] + "/" + eventListTimeline[x][3];
    if(eventListTimeline[x][6] < 10){
      child.innerHTML += " 0" + eventListTimeline[x][6] + ":"
    }
    else {
      child.innerHTML += " " + eventListTimeline[x][6] + ":"
    }
    if(eventListTimeline[x][7] < 10){
       child.innerHTML += "0" + eventListTimeline[x][7];
    }
    else{
      child.innerHTML += eventListTimeline[x][7];
    }

    eventListTimeline[x][5].appendChild(child);
    child = document.createElement("div");
    child.classList.add("event-content");
    child.innerHTML = eventListTimeline[x][0];
    eventListTimeline[x][5].appendChild(child);
    eventListTimeline[x][5].classList.add(eventListTimeline[x][8]);
  }






});

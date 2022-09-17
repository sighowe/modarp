//Import Libraries
const http = require('http');
const open = require('open');

//Declare and initialize constant variables
const hostname = '127.0.0.1';
const port = 3000;

//Start application
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Test Application");
});


//Open web application using default browser
server.listen(port, hostname, () => {
  open('http://' + hostname+':'+port);
});

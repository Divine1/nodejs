
const http = require("http");
const express = require("express");
const hbs = require("hbs");
const socketIO  = require('socket.io');
const routes = require('./routes.js');
const socketEvents = require('./socketEvents.js');

const PORT = 3000;
var app = express();
//app.use(express.static(__dirname+"../static"));
app.use(express.static("static"));
console.log(__dirname);
var server = http.createServer(app);
var io = socketIO(server);
app.set("view engine","hbs");

routes(app);
socketEvents(io);

server.listen(PORT,()=>{
    console.log("server started at port "+PORT);
});
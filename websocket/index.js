var express = require('express');
var socket = require('socket.io');

//app setyp
var app = express();
var server = app.listen(7000, function(){
    console.log('listening for requests on port 7000');
});

//socket setup
var io = socket(server);

// listening for new connection and print a message in console
io.on('connection', (socket) =>{
    console.log(`New Connection ${socket.id}`);

    socket.on('chat', function(data){
        io.socket.emit('chat', data);
    });

    socket.on('typing', function(data){
        io.socket.emit('typing', data);
    });
});
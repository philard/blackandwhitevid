'use strict';

let http = require('http');
let express = require('express');
let socketio = require('socket.io');
let Game = require('./Game');

let app = express();

app.use(express.static(`${__dirname}/public`));

let server = http.createServer(app);
let io = socketio(server);

let waitingPlayer = null;

io.on('connection', (sock) => {
    console.log('someone connected');
    sock.emit('message', 'hi, client');

    if(waitingPlayer) {
        new Game(sock, waitingPlayer);
        waitingPlayer = null;
    } else {
        waitingPlayer = sock;
    }

});



let port = 9000;
server.listen(port, () => {
    console.log('here');
});
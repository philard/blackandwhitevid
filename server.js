'use strict';

let http = require('http');
let express = require('express');
let socketio = require('socket.io');

let app = express();

app.use(express.static(`${__dirname}/public`));

let server = http.createServer(app);
let io = socketio(server);

io.on('connection', (sock) => {
    console.log('someone connected');
    sock.emit('message', 'hi, client');

    sock.on('turn', (turn) => {
        io.emit('turn', turn);
    })

});



let port = 9000;
server.listen(port, () => {
    console.log('here');
});
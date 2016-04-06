'use strict';

let sock = io();

['rock', 'paper', 'scissors'].forEach((figure) => {
    document.querySelector('#'+figure)
        .addEventListener('click', () => {
            sock.emit('turn', figure);
        });

});

sock.emit('message', 'hi im a client');

sock.on('message', (msg) => {
    console.log('got message from server');
});

sock.on('turn', (turn) => {
    let el = document.createElement('li');
    el.innerHTML = 'tuen is ' + turn;
    document.querySelector('#log').appendChild(el);
});



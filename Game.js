'use strict';

class Game {
    constructor(p1, p2) {
        "use strict";

        [p1, p2].forEach((sock) => {
            console.log('stating game');
            sock.emit('message', 'Game started!!!');

            p1.on('turn', (turn) => {
                p2.emit('turn', turn);
            });

        });

    }

}

module.exports = Game;

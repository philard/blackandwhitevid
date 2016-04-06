'use strict';

class Game {
    constructor(p1, p2) {
        "use strict";

        [p1, p2].forEach((sock) => {
            sock.emit('message', 'Game started!!!');
        });

    }

}

module.exports = Game;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameRunner = void 0;
var game_1 = require("./game");
function gameRunner(randomInt) {
    // a simulator of a game
    var winner = false;
    var game = new game_1.Game();
    game.addPlayerCommand('Chet');
    game.addPlayerCommand('Pat');
    game.addPlayerCommand('Sue');
    if (!game.isPlayable) {
        console.log('Game unplayable');
        return;
    }
    do {
        winner = game.playATurnCommand(randomInt(6), randomInt(10));
        game.selectNextPlayerCommand();
    } while (!winner);
}
exports.gameRunner = gameRunner;

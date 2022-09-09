"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameRunner = void 0;
var game_1 = require("./game");
function gameRunner(randomInt) {
    // a simulator of a game
    var notAWinner = false;
    var game = new game_1.Game();
    game.add('Chet');
    game.add('Pat');
    game.add('Sue');
    do {
        game.roll(randomInt(6));
        if (randomInt(10) == 7) {
            notAWinner = game.wrongAnswer();
        }
        else {
            notAWinner = game.wasCorrectlyAnswered();
        }
    } while (notAWinner);
}
exports.gameRunner = gameRunner;
;

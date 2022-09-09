import { Game } from './game';

export function gameRunner(randomInt) {
  // a simulator of a game

  let winner = false;

  const game = new Game();

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

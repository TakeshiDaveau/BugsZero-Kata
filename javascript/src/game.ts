import { PlayerAggregate } from './aggregates/player.aggregate';
import {
  QuestionAggregate,
  QuestionType,
} from './aggregates/question.aggregate';
export class Game {
  private readonly AMOUNT_QUESTIONS: number = 50;
  indexCurrentPlayer: number = 0; // game handle this
  players: PlayerAggregate[] = [];
  questions: Map<QuestionType, QuestionAggregate> = new Map<
    QuestionType,
    QuestionAggregate
  >();
  private readonly questionTypes: Array<QuestionType> = [
    'rock',
    'sport',
    'science',
    'pop',
  ];
  constructor() {
    this.initQuestions();
  }
  initQuestions(): void {
    for (let i = 0; i < this.AMOUNT_QUESTIONS; i++) {
      for (const questionType of this.questionTypes) {
        this.questions.set(
          questionType,
          new QuestionAggregate(questionType, i)
        );
      }
    }
  }

  add(playerName) {
    this.players.push(new PlayerAggregate(playerName));

    console.log('They are player number ' + this.players.length);
  }

  howManyPlayers() {
    return this.players.length;
  }

  didPlayerWin() {
    return !this.players[this.indexCurrentPlayer].hasCompletePurse();
  }

  currentCategory(): QuestionType {
    if ([0, 4, 8].includes(this.players[this.indexCurrentPlayer].place))
      return 'pop';
    if ([1, 5, 9].includes(this.players[this.indexCurrentPlayer].place))
      return 'science';
    if ([2, 6, 10].includes(this.players[this.indexCurrentPlayer].place))
      return 'sport';

    return 'rock';
  }

  askQuestion() {
    console.log(this.questions.get(this.currentCategory())?.name);
  }

  isPlayable(howManyPlayers) {
    return howManyPlayers >= 2;
  }

  roll(roll) {
    console.log(
      this.players[this.indexCurrentPlayer] + ' is the current player'
    );
    console.log('They have rolled a ' + roll);

    const askQuestion =
      this.players[this.indexCurrentPlayer].moveOnGameBoard(roll);

    if (askQuestion) {
      this.askQuestion();
    }
  }

  wasCorrectlyAnswered() {
    this.indexCurrentPlayer++;
    if (this.indexCurrentPlayer === this.players.length) {
      this.indexCurrentPlayer = 0;
    }
    if (this.players[this.indexCurrentPlayer].inPenaltyBox) {
      return true;
    } else {
      console.log('Answer was correct!!!!');
      this.players[this.indexCurrentPlayer].purse++;
      console.log(
        this.players[this.indexCurrentPlayer].name +
          ' now has ' +
          this.players[this.indexCurrentPlayer].purse +
          ' Gold Coins.'
      );
      var winner = this.didPlayerWin();

      return winner;
    }
  }

  wrongAnswer() {
    console.log('Question was incorrectly answered');
    console.log(
      this.players[this.indexCurrentPlayer].name +
        ' was sent to the penalty box'
    );
    this.players[this.indexCurrentPlayer].inPenaltyBox = true;

    if (this.indexCurrentPlayer === this.players.length) {
      this.indexCurrentPlayer = 0;
    }
    return true;
  }
}

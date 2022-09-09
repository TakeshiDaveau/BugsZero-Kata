import { PlayerAggregate } from './aggregates/player.aggregate';
import {
  QuestionAggregate,
  QuestionType,
} from './aggregates/question.aggregate';
export class Game {
  private readonly AMOUNT_QUESTIONS: number = 50;
  indexCurrentPlayer: number = 0; // game handle this
  players: PlayerAggregate[] = [];
  questions: Map<QuestionType, Array<QuestionAggregate>> = new Map<
    QuestionType,
    QuestionAggregate[]
  >();
  private readonly questionTypes: Array<QuestionType> = [
    'Rock',
    'Sports',
    'Science',
    'Pop',
  ];

  get howManyPlayers(): number {
    return this.players.length;
  }

  get currentCategory(): QuestionType {
    if ([0, 4, 8].includes(this.players[this.indexCurrentPlayer].place))
      return 'Pop';
    if ([1, 5, 9].includes(this.players[this.indexCurrentPlayer].place))
      return 'Science';
    if ([2, 6, 10].includes(this.players[this.indexCurrentPlayer].place))
      return 'Sports';

    return 'Rock';
  }

  get isPlayable(): boolean {
    return this.howManyPlayers >= 2;
  }

  constructor() {
    this.initQuestions();
  }

  // Command
  addPlayerCommand(playerName) {
    this.players.push(new PlayerAggregate(playerName));

    console.log('They are player number ' + this.players.length);
  }

  playATurnCommand(roll, randomAnswer) {
    console.log(
      this.players[this.indexCurrentPlayer].name + ' is the current player'
    );
    console.log('They have rolled a ' + roll);

    const inPenaltyBox =
      this.players[this.indexCurrentPlayer].moveOnGameBoardCommand(roll);

    let winner = false;
    if (!inPenaltyBox) {
      this.askQuestion();
      //Random pour savoir si le player a bien répondu
      if (randomAnswer === 7) {
        winner = this.players[this.indexCurrentPlayer].answerWrongCommand();
      } else {
        winner = this.players[this.indexCurrentPlayer].answerCorrectlyCommand();
      }
    }
    return winner;
  }

  selectNextPlayerCommand() {
    this.indexCurrentPlayer++;
    if (this.indexCurrentPlayer === this.players.length) {
      this.indexCurrentPlayer = 0;
    }
  }

  // Actions interne à Game
  private initQuestions(): void {
    for (const questionType of this.questionTypes) {
      this.questions.set(questionType, []);
      for (let i = 0; i < this.AMOUNT_QUESTIONS; i++) {
        this.questions
          .get(questionType)
          ?.push(new QuestionAggregate(questionType, i));
      }
    }
  }

  private askQuestion() {
    const question = this.questions.get(this.currentCategory)?.shift();
    console.log('The category is ' + question?.type);
    console.log(question?.name);
  }
}

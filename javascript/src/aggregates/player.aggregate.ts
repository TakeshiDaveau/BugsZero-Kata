export class PlayerAggregate {
  name: string;
  place: number;
  purse: number;
  inPenaltyBox: boolean;

  constructor(name: string) {
    this.name = name;
    this.place = 0;
    this.purse = 0;
    this.inPenaltyBox = false;

    console.log(name + ' was added');
  }

  hasCompletePurse() {
    return this.purse === 6;
  }

  // Command
  moveOnGameBoard(diceValue: number): boolean {
    if (this.inPenaltyBox) {
      if (diceValue % 2 != 0) {
        this.inPenaltyBox = false;
        console.log(this.name + ' is getting out of the penalty box');
        this.place += diceValue;
        if (this.place > 11) {
          this.place = this.place - 12;
        }
        console.log(this.name + "'s new location is " + this.place);
      } else {
        console.log(this.name + ' is not getting out of the penalty box');
      }
    }

    return this.inPenaltyBox;
  }
  answerQuestion() {}
}

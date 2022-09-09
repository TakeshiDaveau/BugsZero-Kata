"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerAggregate = void 0;
var PlayerAggregate = /** @class */ (function () {
    function PlayerAggregate(name) {
        this.name = name;
        this.place = 0;
        this.purse = 0;
        this.inPenaltyBox = false;
        console.log(name + ' was added');
    }
    PlayerAggregate.prototype.hasCompletePurse = function () {
        return this.purse === 6;
    };
    // Command
    PlayerAggregate.prototype.moveOnGameBoard = function (diceValue) {
        if (this.inPenaltyBox) {
            if (diceValue % 2 != 0) {
                this.inPenaltyBox = false;
                console.log(this.name + ' is getting out of the penalty box');
                this.place += diceValue;
                if (this.place > 11) {
                    this.place = this.place - 12;
                }
                console.log(this.name + "'s new location is " + this.place);
            }
            else {
                console.log(this.name + ' is not getting out of the penalty box');
            }
        }
        return this.inPenaltyBox;
    };
    PlayerAggregate.prototype.answerQuestion = function () { };
    return PlayerAggregate;
}());
exports.PlayerAggregate = PlayerAggregate;

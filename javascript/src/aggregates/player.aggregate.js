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
    PlayerAggregate.prototype.moveOnGameBoardCommand = function (diceValue) {
        if (this.inPenaltyBox) {
            if (diceValue % 2 === 0) {
                console.log(this.name + ' is not getting out of the penalty box');
                return true;
            }
            else {
                this.inPenaltyBox = false;
                console.log(this.name + ' is getting out of the penalty box');
            }
        }
        this.place += diceValue;
        if (this.place > 11) {
            this.place = this.place - 12;
        }
        console.log(this.name + "'s new location is " + this.place);
        return this.inPenaltyBox;
    };
    PlayerAggregate.prototype.answerWrongCommand = function () {
        console.log('Question was incorrectly answered');
        console.log(this.name + ' was sent to the penalty box');
        this.inPenaltyBox = true;
        return false;
    };
    PlayerAggregate.prototype.answerCorrectlyCommand = function () {
        if (this.inPenaltyBox) {
            return false;
        }
        else {
            console.log('Answer was correct!!!!');
            this.purse++;
            console.log(this.name + ' now has ' + this.purse + ' Gold Coins.');
            return this.hasCompletePurse();
        }
    };
    return PlayerAggregate;
}());
exports.PlayerAggregate = PlayerAggregate;

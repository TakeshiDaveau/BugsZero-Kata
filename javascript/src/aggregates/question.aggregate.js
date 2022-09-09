"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionAggregate = void 0;
var QuestionAggregate = /** @class */ (function () {
    function QuestionAggregate(type, id) {
        this.type = type;
        this.id = id;
        this.name = this.type + " question number " + this.id;
    }
    return QuestionAggregate;
}());
exports.QuestionAggregate = QuestionAggregate;

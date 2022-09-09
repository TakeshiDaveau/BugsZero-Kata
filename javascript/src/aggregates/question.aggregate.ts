export type QuestionType = 'rock' | 'science' | 'sport' | 'pop';
export class QuestionAggregate {
  name: string;
  constructor(public type: QuestionType, public id: number) {
    this.name = `${this.type} question number ${this.id}`;
  }
}

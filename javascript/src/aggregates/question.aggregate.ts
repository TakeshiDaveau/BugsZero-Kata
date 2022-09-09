// Value Object
export type QuestionType = 'Rock' | 'Science' | 'Sports' | 'Pop';
export class QuestionAggregate {
  name: string;
  constructor(public type: QuestionType, public id: number) {
    this.name = `${this.type} Question ${this.id}`;
  }
}

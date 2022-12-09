import {QuestionDto} from "./QuestionDto";

export class Round {
  private _id: number;
  private _questions: QuestionDto[];

  constructor(id: number, questions: QuestionDto[]) {
    this._id = id;
    this._questions = questions;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get questions(): QuestionDto[] {
    return this._questions;
  }

  set questions(value: QuestionDto[]) {
    this._questions = value;
  }
}


import {AnswerDto} from "./AnswerDto";

export interface QuestionDto{
  vocabId: number;
  name: string;
  answers: AnswerDto[];
}

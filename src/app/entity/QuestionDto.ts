import {AnswerDto} from "./AnswerDto";

export interface QuestionDto{
  questionId?: number;
  vocabId?: number;
  name?: string;
  answers?: AnswerDto[];
}

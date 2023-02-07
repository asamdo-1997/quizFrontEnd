import {QuestionDto} from "./QuestionDto";

export interface AnswerDto{
  id?: number;
  translationId?: number;
  answerValue?: string;
  correct?: boolean;
  userId?:number;
  correctTranslationId?: number;
  question?:QuestionDto;
  version?: number;
}

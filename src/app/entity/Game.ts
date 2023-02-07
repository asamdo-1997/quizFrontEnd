import {Round} from "./round";

export interface Game {
  id: number;
  user1: number;
  user2: number;
  rounds: Round[];
  category: string;
  nextUser: number;
  done: boolean;
  winnerId: number;
  scorePlayer1: number;
  scorePlayer2: number;
  version?: number;
}

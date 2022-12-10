import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Round} from "../entity/round";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  url = environment.gameAdress;
  answerChecked = new Subject<boolean>();
  constructor(private http: HttpClient) { }

  createGame(userId1: number, userId2: number, category: string ){
    return this.http.get<any>(this.url+'game/createGame/'+userId1+"/"+userId2+"/"+category);
  }
  getGamesFromUser(id: number){
    return this.http.get<any>(this.url+'game/userGames/'+id);
  }

  getGame(userId: string){
    return this.http.get<any>(this.url+'game/getgamebyid/'+userId);
  }
  getCurrentRound(gameId: number){
    return this.http.get<Round>(this.url+'game/currentround/'+gameId);
  }

  getRightAnswer(vocabId:number, userId:number,translationId:number, answerValue: string, questionId:number){
    let elem = {
      vocabId : vocabId,
      userId : userId,
      translationId:translationId,
      answerValue: answerValue,
      questionId:questionId,
    }
    return this.http.post<any>(this.url+'game/check',elem);
  }
}

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "../entity/User";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  url = environment.gameAdress;
  constructor(private http: HttpClient) { }

  createGame(userId1: number, userId2: number, category: string ){
    return this.http.get<any>(this.url+'game/createGame/'+userId1+"/"+userId2+"/"+category);
  }

  getGame(userId: string){
    return this.http.get<any>(this.url+'game/getgamebyid/'+userId);
  }
  getCurrentRound(gameId: string){
    return this.http.get<any>(this.url+'game/currentround/'+gameId);
  }

  getRightAnswer(vocabId:number, userId:number,translationId:number, questionId:number){
    let elem = {
      vocabId : vocabId,
      userId : userId,
      translationId:translationId,
      questionId:questionId,
    }
    return this.http.post<any>(this.url+'game/check',elem);
  }
}

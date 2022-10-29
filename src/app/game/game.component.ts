import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {interval} from "rxjs";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  imgUrl = "https://cdn.dribbble.com/users/5642965/screenshots/12675462/media/a5289f4656018eb4d2f20a72254caf50.jpg?compress=1&resize=1600x1200&vertical=top";
  progressbarValue = 100;
  curSec: number = 0;
  currentQuestition = 0;
  sub: any;
  game =
    {
      id: 1,
      spieler1: "jonas",
      spieler2: "Dominik",
      gegnerSpielt: false,
      runde: 1,
      questionList: [
        {
          questionId: 1,
          questionText: "Auto",
          AnswerList: ["Car", "Cur", "Cat", "Cot"],
          rightAnwser: ["Car"],
        },
        {
          questionId: 1,
          questionText: "Straße",
          AnswerList: ["Stoot", "Street", "Straut", "Struet"],
          rightAnwser: ["Street"],
        },
        {
          questionId: 1,
          questionText: "Haus",
          AnswerList: ["Heise", "Hause", "Hoise", "House"],
          rightAnwser: ["House"],
        }
      ],
    };

  constructor(private route:Router) {
  }

  ngOnInit(): void {
    this.startTimer(60);
    this.currentQuestition = 1;
  }

  returnToOverview(){
    this.route.navigate(['/game-overview'])
  }

  startTimer(seconds: number) {
    const time = seconds;
    const timer$ = interval(1000);

    this.sub = timer$.subscribe((sec) => {
      this.progressbarValue = 100 - sec * 100 / seconds;
      this.curSec = sec;

      if (this.curSec === seconds) {
        this.sub.unsubscribe();
      }
    });
  }

  checkAnswer(){
    this.sub.unsubscribe();
    this.progressbarValue = 100;
    this.curSec = 0;
    this.currentQuestition = 2;
    this.startTimer(60);
  }
}

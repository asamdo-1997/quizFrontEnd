import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {interval, timeout} from "rxjs";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  imgUrl = "https://cdn.dribbble.com/users/5642965/screenshots/12675462/media/a5289f4656018eb4d2f20a72254caf50.jpg?compress=1&resize=1600x1200&vertical=top";
  durationOftimer = 10;
  progressbarValue = 100;
  curSec: number = 0;
  currentQuestition: number = 0;
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
          rightAnswer: "Car",
        },
        {
          questionId: 2,
          questionText: "Straße",
          AnswerList: ["Stoot", "Street", "Straut", "Struet"],
          rightAnswer: "Street",
        },
        {
          questionId: 3,
          questionText: "Haus",
          AnswerList: ["Heise", "Hause", "Hoise", "House"],
          rightAnswer: "House",
        }
      ],
    };

  constructor(private route: Router) {
  }

  ngOnInit(): void {
    this.currentQuestition = 1;
    this.startTimer(this.durationOftimer);
  }

  returnToOverview() {
    this.route.navigate(['/game-overview'])
  }

  startTimer(seconds: number) {
    const time = seconds;
    const timer$ = interval(1000);

    this.sub = timer$.subscribe((sec) => {
      this.progressbarValue = 100 - sec * 100 / seconds;
      this.curSec = sec;
      console.log(sec);
      if (this.curSec === seconds) {
        this.sub.unsubscribe();
        if (this.currentQuestition < 3) {
          this.currentQuestition++;
          this.startTimer(this.durationOftimer);
        } else {
          this.route.navigate(['/game-overview'])
        }
      }
    });
  }

  stoppCounter() {
    this.sub.unsubscribe();
    this.progressbarValue = 100;
    this.curSec = 0;
  }

  nextAnswer() {
    this.stoppCounter();
    setTimeout(() => {
      console.log(this.currentQuestition);
      if (this.currentQuestition < 3) {
        this.currentQuestition++;
        this.startTimer(this.durationOftimer);
      } else {
        this.route.navigate(['/game-overview']);
      }
    }, 1000);
  }

  checkAnswer(userAnswer: string, rightAnswer: string): boolean {
    if (userAnswer == rightAnswer) {
      return true;
    } else {
      return false;
    }
    return false;
  }


}

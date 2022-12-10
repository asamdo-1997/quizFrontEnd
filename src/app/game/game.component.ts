import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {interval, timeout} from "rxjs";
import {GameService} from "../services/game.service";
import {Round} from "../entity/round";
import {AnswerDto} from "../entity/AnswerDto";

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
  gameId: number = 0;
  isright: boolean = false;
  round: Round = {
    questions: [{
      answers: [{}, {}, {}, {},]
    }]
  };

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private gameService: GameService) {
  }

  ngOnInit(): void {
    this.gameId = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.gameService.getCurrentRound(this.gameId).subscribe(value => {
      this.round = value;
    })
    this.currentQuestition = 1;
    this.startTimer(this.durationOftimer);
  }

  returnToOverview() {
    //this.route.navigate(['/game-overview/'+this.gameId])
  }

  startTimer(seconds: number) {
    const time = seconds;
    const timer$ = interval(1000);

    this.sub = timer$.subscribe((sec) => {
      this.progressbarValue = 100 - sec * 100 / seconds;
      this.curSec = sec;
      if (this.curSec === seconds) {
        this.sub.unsubscribe();
        if (this.currentQuestition < 3) {
          this.currentQuestition++;
          this.startTimer(this.durationOftimer);
        } else {
          this.returnToOverview()
        }
      }
    });
  }

  stoppCounter() {
    this.sub.unsubscribe();
    this.progressbarValue = 100;
    this.curSec = 0;
  }

  nextAnswer(translationId: number, vocabId: number, questionId: number) {
    this.checkAnswer(translationId, vocabId, questionId);
    this.isright = false;
  }

  checkAnswer(translationId: number, vocabId: number, questionId: number) {
    this.gameService.getRightAnswer(vocabId, +localStorage.getItem("id")!, translationId, "", questionId).subscribe(value => {
      this.gameService.answerChecked.next(value.correct);
      //this.gameService.answerChecked.next("");
      this.stoppCounter();
      setTimeout(() => {
        if (this.currentQuestition < 3) {
          this.currentQuestition++;
          this.startTimer(this.durationOftimer);
        } else {
          this.route.navigate(['/dashboard']);
        }
      }, 1000);
    });

  }


}

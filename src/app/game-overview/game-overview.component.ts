import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../services/game.service";

@Component({
  selector: 'app-game-overview',
  templateUrl: './game-overview.component.html',
  styleUrls: ['./game-overview.component.css']
})
export class GameOverviewComponent implements OnInit {
  gameId: string = "";
  rounds = [{
    id: 0,
    questions: [],
    done: false
  }];
  user1: number = 0;
  user2: number = 0;
  scorePlayer1: number = 0;
  scorePlayer2: number = 0;
  dot: string = "dot-grey";
  imgUrl = "https://cdn.dribbble.com/users/5642965/screenshots/12675462/media/a5289f4656018eb4d2f20a72254caf50.jpg?compress=1&resize=1600x1200&vertical=top";

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private gameService: GameService) { }

  ngOnInit(): void {
    this.gameId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.gameService.getGame(this.activatedRoute.snapshot.paramMap.get('id')!).subscribe(value => {
      console.log(value)
      this.rounds = value.rounds;
      this.user1 = value.user1;
      this.user2 = value.user2;
      this.scorePlayer1 = value.scorePlayer1;
      this.scorePlayer2 = value.scorePlayer2;
    });
  }

  returnToOverView(){
    this.router.navigate(['/dashboard'])
  }
  continueGame(){
    this.router.navigate(['/game/'+this.gameId])
  }
}

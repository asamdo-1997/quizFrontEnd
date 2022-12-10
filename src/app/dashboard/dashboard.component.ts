import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {GameService} from "../services/game.service";
import {Game} from "../entity/Game";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name: string = "";
  usergames!: Game[];
  userId: number = 0;

  games = [
    {id: 1, spieler1: "jonas", spieler2: "Dominik", gegnerSpielt: true, runde: 2},
    {id: 2, spieler1: "jonas", spieler2: "Ata", gegnerSpielt: true, runde: 1},
    {id: 3, spieler1: "jonas", spieler2: "Dominik", gegnerSpielt: false, runde: 1},
  ];

  gamesFinished = [
    {id: 1, spieler1: "jonas", spieler2: "Ata", gegnerSpielt: false, runde: 9, beendet: true},
    {id: 2, spieler1: "jonas", spieler2: "Ata", gegnerSpielt: false, runde: 9, beendet: true},
    {id: 3, spieler1: "jonas", spieler2: "Dominik", gegnerSpielt: false, runde: 9, beendet: true}]

  imgUrl = "https://cdn.dribbble.com/users/5642965/screenshots/12675462/media/a5289f4656018eb4d2f20a72254caf50.jpg?compress=1&resize=1600x1200&vertical=top";

  constructor(private route: Router, private gameService: GameService, private userService: UserService) {
  }

  ngOnInit(): void {
    console.log()
    this.userId = +localStorage.getItem("id")!;
    this.name = localStorage.getItem("name")!;
    this.gameService.getGamesFromUser(+localStorage.getItem("id")!).subscribe(value => {
      this.usergames = value;
      console.log(value);
    })
  }

  startNewGame() {
    let userId = 0;
    if(+localStorage.getItem("id")! == 1){
      userId = 2
    }else {
      userId = 1
    }
    this.gameService.createGame(+localStorage.getItem("id")!,userId,"test").subscribe(value => {
      this.route.navigate(['/game-overview/'+value])
    })
  }

  logout() {
    localStorage.clear();
    this.route.navigate(['/login'])
  }

  getUserNameById(id: number):String {
    let username: String = "";
    this.userService.getUserNameById(id).subscribe(value => {
      username = value;
    })
    return username;
  }

  startCurrentRound(id: number){
    this.route.navigate(['/game-overview/'+id])
  }
}

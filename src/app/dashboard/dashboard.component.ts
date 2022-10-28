import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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

  constructor() {
  }

  ngOnInit(): void {
  }

  startNewGame() {

  }
}

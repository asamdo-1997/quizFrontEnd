import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-game-overview',
  templateUrl: './game-overview.component.html',
  styleUrls: ['./game-overview.component.css']
})
export class GameOverviewComponent implements OnInit {

  games = [1,2,3,4,5,6];
  imgUrl = "https://cdn.dribbble.com/users/5642965/screenshots/12675462/media/a5289f4656018eb4d2f20a72254caf50.jpg?compress=1&resize=1600x1200&vertical=top";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  returnToOverView(){
    this.router.navigate(['/dashboard'])
  }
  continueGame(){
    this.router.navigate(['/game'])
  }
}

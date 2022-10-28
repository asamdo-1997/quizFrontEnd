import {LoginComponent} from "./login/login.component";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VocabComponent} from "./vocab/vocab.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {GameComponent} from "./game/game.component";
import {GameOverviewComponent} from "./game-overview/game-overview.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'game-overview', component: GameOverviewComponent },
  { path: 'game', component: GameComponent },
  { path: 'admin', component: VocabComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

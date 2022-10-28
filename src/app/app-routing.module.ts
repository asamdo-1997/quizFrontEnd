import {LoginComponent} from "./login/login.component";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VocabComponent} from "./vocab/vocab.component";
import {DashboardComponent} from "./dashboard/dashboard.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin', component: VocabComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

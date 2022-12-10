import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMsg: string = "";

  constructor(private formBuilder: FormBuilder, private route: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl("", Validators.required),
    })
  }

  login(){
    this.userService.getUserByNutzername(this.loginForm.value.username).subscribe(value => {
      console.log(this.loginForm.value.username);
      console.log(value);
      if(value == null){
        this.errorMsg = "Nutzer nicht gefunden";
      }else {
        localStorage.setItem("id", String(value.nutzerId!));
        localStorage.setItem("name", value.vorname!);
        this.route.navigate(['/dashboard']);
      }
    })
  }

}

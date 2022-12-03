import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "./register.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform!: FormGroup;

  constructor(private formBuilder: FormBuilder, private registerService: RegisterService, private route:Router) { }

  ngOnInit(): void {
    this.registerform = this.formBuilder.group({
      email: ["", Validators.required],
      vorname: ["", Validators.required],
      nachname: ["", Validators.required],
      nutzername: ["", Validators.required],
    });
  }

  register(){
    if(this.registerform.valid){
      this.registerService.addUser(this.registerform.value).subscribe(value => {
        console.log(value);
        this.route.navigate(['/dashboard'])
      });
    }
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../entity/User";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = environment.userAdress;
  constructor(private http: HttpClient) { }

  addUser(user: User){
    return this.http.post<User>(this.url+'/user', user);
  }
}

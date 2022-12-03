import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../entity/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.userAdress;
  constructor(private http: HttpClient) { }

  addUser(user: User){
    return this.http.post<User>(this.url+'/user', user);
  }
  getallUsers(){
    return this.http.get<any>(this.url+'/user/getall');
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../entity/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.userAdress;

  constructor(private http: HttpClient) {
  }

  addUser(user: User) {
    return this.http.post<User>(this.url + 'user', user);
  }

  getUserByNutzername(nutzername: string) {
    return this.http.get<User>(this.url + 'user/getbynutzername/' + nutzername);
  }

  getUserNameById(id: number){
    return this.http.get<String>(this.url + 'user/getusernamebyid/'+id, {responseType: "text" as "json"});
  }

  getallUsers() {
    return this.http.get<any>(this.url + 'user/getall');
  }

  deleteUser(id: number) {
    console.log(id);
    return this.http.delete<any>(this.url + 'user/delete/' + id);
  }
}

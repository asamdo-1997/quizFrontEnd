import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VoacabServiceService {

  url = environment.vocabAdress;

  constructor(private http: HttpClient) {}

  sendFile(file: any){
    return this.http.post(this.url + '/list', file);
  }

}



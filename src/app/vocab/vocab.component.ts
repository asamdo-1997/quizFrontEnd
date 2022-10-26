import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-vocab',
  templateUrl: './vocab.component.html',
  styleUrls: ['./vocab.component.css']
})
export class VocabComponent implements OnInit {

  fileName = '';
  url = environment.vocabAdress + 'vocab/';
  category='';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {

    const file:File = event.target.files[0];

    if (file) {

      this.fileName = file.name;

      const formData = new FormData();

      formData.append("thumbnail", file);

      //const upload$ = this.http.post(this.url + '/list', formData);

     // upload$.subscribe();

      this.http.post(this.url + 'list/' + this.category, formData).subscribe(
        () => {
          console.log('sub')
        }
      )
    }
  }

}

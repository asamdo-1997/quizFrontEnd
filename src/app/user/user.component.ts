import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {User} from "../entity/User";
import {UserService} from "../services/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('sort') sort!: MatSort;

  form!: FormGroup;

  breakpoint: number = 0;
  displayedColumns: string[] = ['nutzerId', 'vorname', 'nachname', 'email', 'nutzername', 'edit'];
  dataSource!: MatTableDataSource<User>;

  constructor(private userService: UserService, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
    this.userService.getallUsers().subscribe(value => {
      this.dataSource = value;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(value);
    });

    this.form = this.formBuilder.group({
      nutzername: [],
      email: [],
      vorname: [],
      nachname: []
    });
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe();
  }

  addUser(){
    this.userService.addUser(this.form.value).subscribe({
      next: (res)=> {
        console.log(res);
        this.form.reset();
      },
      error:()=>{
      }
    });
  }

}

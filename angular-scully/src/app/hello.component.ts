import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserService } from './user.service';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: []
})
export class HelloComponent implements OnInit {

  title = 'hello';
  users = '';
  errors = '';

  constructor(private userService: UserService) { 
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (users: string[]) => this.users = JSON.stringify(users),
      (error) => this.errors = JSON.stringify(error),
      () => console.log('Complete')
    )
  }

}

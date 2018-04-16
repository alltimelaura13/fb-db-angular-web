import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  users: Object[];
  newUser: Object = {};

  constructor(private router: Router) { }

  ngOnInit() {
    // this.users = usersList;
  }

  addUser(){
    console.log('click');
    this.router.navigate(['/newUser']);
  }

}

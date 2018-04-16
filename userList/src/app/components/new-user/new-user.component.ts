import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  user;
  firebase;


  constructor() {
    this.user;

  }

  ngOnInit() {
  }
  addUserName() {
    if (this.user) {
      this.firebase.push({user: this.user});
    } else {
      alert('Enter user');
    }
  }

}

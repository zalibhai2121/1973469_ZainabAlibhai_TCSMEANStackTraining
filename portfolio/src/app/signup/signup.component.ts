import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  users: any = [];
  Register = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    user: new FormControl(),
    pass: new FormControl()
  });

  constructor(public router: Router) {
   }

  ngOnInit(): void {
  }
  assignUser(): void {
    this.newUser();
    sessionStorage.setItem('new-user', JSON.stringify(this.users));
    this.router.navigate(['login']);
    console.log(sessionStorage.getItem('new-user'));
  }
 newUser(): void{
    const fname = this.Register.value.firstName;
    const lname = this.Register.value.lastName;
    const user = this.Register.value.user;
    const pass = this.Register.value.pass;
    this.users.push(user, pass);
    // console.log('THIS IS IN USERS: ' + this.users);
  }

}

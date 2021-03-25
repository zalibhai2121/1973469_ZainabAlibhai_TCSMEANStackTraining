import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRef = new FormGroup({
    user: new FormControl(),
    pass: new FormControl()
  });

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  checkUser(): void {
    const user = this.loginRef.value.user;
    const pass = this.loginRef.value.pass;

    console.log(this.loginRef.value);
    this.homePage();
  }
  homePage(): void {
    this.router.navigate(['portfolio']);
  }
  register(): void {
    this.router.navigate(['signup']);
  }

}

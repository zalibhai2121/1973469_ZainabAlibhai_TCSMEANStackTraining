import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Portfolio } from '../portfolio.models';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  username = '';
  contact = new FormGroup({
    contactInfo: new FormControl(),
    phoneNumber: new FormControl()
  });

  cons: Array<Portfolio> = new Array();

  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  addPortfolio(): void {
    const cons1 = new Portfolio(this.contact.value.contactInfo, this.contact.value.phoneNumber);
    this.cons.push(cons1);
  }
}

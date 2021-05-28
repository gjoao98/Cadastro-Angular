import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../components/create-account.model'
import { CreateAccountService } from '../components/create-account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  account: Account = {
    name: '',
    email: '',
    password: ''
  }

  constructor(
    private createAccountService: CreateAccountService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  createAccount(): void {
    this.createAccountService.create(this.account).subscribe(() => {
      this.createAccountService.showMessage('Your account was created!')
      this.router.navigate(['/confirm'])
    })
  }
}
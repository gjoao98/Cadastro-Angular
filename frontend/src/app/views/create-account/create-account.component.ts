import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CreateAccountService } from '../components/create-account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  createForm: FormGroup = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    }
  );

  constructor(
    private createAccountService: CreateAccountService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (this.createForm.invalid) {
      return;
    }

    const account = {
      name: this.createForm.get('name')!.value,
      email: this.createForm.get('email')!.value,
      password: this.createForm.get('password')!.value
    };

    this.createAccountService.create(account).subscribe(() => {
      this.router.navigate(['/confirm'])
    })
  }

  /*
  createMessage(): void {
    this.createAccountService.showMessage('Your account was created!')
  }
  
  verifyValidTouched(formControlName: FormControl) {
    return !formControlName.valid && formControlName.touched;
  }

  applyError(formControlName: FormControl) {
    return {
      'has-error': this.verifyValidTouched(formControlName),
      'has-feedback': this.verifyValidTouched(formControlName)
    }
  }
  */
}
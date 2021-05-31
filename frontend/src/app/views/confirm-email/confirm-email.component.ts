import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {

  confirmCode: FormGroup = new FormGroup({
    n1: new FormControl('', [Validators.required, Validators.maxLength(1)]),
    n2: new FormControl('', [Validators.required, Validators.maxLength(1)]),
    n3: new FormControl('', [Validators.required, Validators.maxLength(1)]),
    n4: new FormControl('', [Validators.required, Validators.maxLength(1)]),
    n5: new FormControl('', [Validators.required, Validators.maxLength(1)]),
    n6: new FormControl('', [Validators.required, Validators.maxLength(1)]),
  })

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (this.confirmCode.invalid) {
      return;
    }

    const code = {
      n1: this.confirmCode.get('n1')!.value,
      n2: this.confirmCode.get('n2')!.value,
      n3: this.confirmCode.get('n3')!.value,
      n4: this.confirmCode.get('n4')!.value,
      n5: this.confirmCode.get('n5')!.value,
      n6: this.confirmCode.get('n6')!.value,
    }

    this.router.navigate(['/terms'])
  }
}
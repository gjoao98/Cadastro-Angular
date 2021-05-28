import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Account } from './create-account.model';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  baseUrl = "http://localhost:3001/accounts"

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(account: Account): Observable<Account> {
    return this.http.post<Account>(this.baseUrl, account);
  }
}

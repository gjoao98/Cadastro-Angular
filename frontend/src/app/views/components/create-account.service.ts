import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from './create-account.model';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  constructor(
    private http: HttpClient,
  ) { }

  create(account: Account): Observable<Account> {
    return this.http.post<Account>(environment.apiAccounts, account);
  }

  /*
  showMessage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }
  */
}

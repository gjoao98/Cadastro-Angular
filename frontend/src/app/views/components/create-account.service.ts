import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './create-account.model';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  baseUrl = "http://localhost:3001/accounts"

  constructor(
    private http: HttpClient
  ) { }

  create(account: Account): Observable<Account> {
    return this.http.post<Account>(this.baseUrl, account);
  }
}

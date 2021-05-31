import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invite } from './invite.model';

@Injectable({
  providedIn: 'root'
})
export class InviteService {

  baseUrl = "http://localhost:3001/invite"

  constructor(
    private http: HttpClient
  ) { }

  inviteFriends(invite: Invite): Observable<Invite> {
    return this.http.post<Invite>(this.baseUrl, invite);
  }
}

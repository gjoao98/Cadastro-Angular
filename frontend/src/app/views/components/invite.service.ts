import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Invite } from './invite.model';

@Injectable({
  providedIn: 'root'
})
export class InviteService {

  constructor(
    private http: HttpClient
  ) { }

  inviteFriends(invite: Invite): Observable<Invite> {
    return this.http.post<Invite>(environment.apiInvite, invite);
  }
}

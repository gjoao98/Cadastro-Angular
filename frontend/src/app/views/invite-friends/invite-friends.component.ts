import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InviteService } from '../components/invite.service';

@Component({
  selector: 'app-invite-friends',
  templateUrl: './invite-friends.component.html',
  styleUrls: ['./invite-friends.component.css']
})
export class InviteFriendsComponent implements OnInit {

  inviteFriends: FormGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email])
    }
  );

  constructor(
    private inviteService: InviteService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onSubmit(e: Event): void {

    e.initEvent;

    if (this.inviteFriends.invalid) {
      return;
    }

    const invite = {
      email: this.inviteFriends.get('email')!.value
    };

    this.inviteService.inviteFriends(invite).subscribe(() => {
      this.router.navigate([''])
      //this.inviteFriends.reset();
    })
  }
}
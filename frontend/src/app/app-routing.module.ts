import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmEmailComponent } from './views/confirm-email/confirm-email.component';

import { CreateAccountComponent } from './views/create-account/create-account.component';
import { InviteFriendsComponent } from './views/invite-friends/invite-friends.component';
import { TermsConditionsComponent } from './views/terms-conditions/terms-conditions.component';

const routes: Routes = [
  {
    path: "",
    component: CreateAccountComponent
  },
  {
    path: "confirm",
    component: ConfirmEmailComponent
  },
  {
    path: "terms",
    component: TermsConditionsComponent
  },
  {
    path: "invite",
    component: InviteFriendsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

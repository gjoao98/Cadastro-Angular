import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConfirmEmailComponent } from './views/confirm-email/confirm-email.component';
import { TermsConditionsComponent } from './views/terms-conditions/terms-conditions.component';
import { InviteFriendsComponent } from './views/invite-friends/invite-friends.component'

import { AppRoutingModule } from './app-routing.module';
import { CreateAccountModule } from './views/create-account/create-account.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar'


@NgModule({
  declarations: [
    AppComponent,
    ConfirmEmailComponent,
    TermsConditionsComponent,
    InviteFriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CreateAccountModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

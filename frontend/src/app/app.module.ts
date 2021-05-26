import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';

import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import { ConfirmEmailComponent } from './views/confirm-email/confirm-email.component';
import { TermsConditionsComponent } from './views/terms-conditions/terms-conditions.component';
import { InviteFriendsComponent } from './views/invite-friends/invite-friends.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfirmEmailComponent,
    TermsConditionsComponent,
    InviteFriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

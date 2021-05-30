import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    CreateAccountComponent
  ]
})
export class CreateAccountModule { }
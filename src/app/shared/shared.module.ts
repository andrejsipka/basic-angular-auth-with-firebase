import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { InputFormComponent } from './input-form/input-form.component';



@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    InputFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

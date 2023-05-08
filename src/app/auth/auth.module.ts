import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// Moduels
import { AuthRoutingModule } from './auth-routing.module';
// Services
import { AuthService } from './auth.service';
// Components
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';
import { SignoutComponent } from './signout/signout.component';


@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent,
        SignoutComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        SharedModule
    ]
})
export class AuthModule { }

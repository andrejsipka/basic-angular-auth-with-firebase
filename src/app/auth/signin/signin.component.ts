import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// Services
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
    public authForm: FormGroup = new FormGroup({
        username: new FormControl('', [
            Validators.required,
            Validators.email
        ]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
        ]),
    });

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    public onSubmit(): void {
        if(this.authForm.invalid) {
            return;
        }

        this.authService.login(this.authForm.value);

        this.authService.signin$.subscribe((state) => {
            if(state) this.router.navigateByUrl('/map');
        })
    }

}

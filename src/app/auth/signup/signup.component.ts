import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    public authForm: FormGroup = new FormGroup({
        username: new FormControl('', [
            Validators.required,
            Validators.email
        ]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
        ]),
        passwordConfirmation: new FormControl('', [
            Validators.required
        ])
    }, { validators: [this.matchPassword.validate] });

    constructor(
        private matchPassword: MatchPassword,
        private router: Router,
        private readonly authService: AuthService
    ) {}

    public ngOnInit(): void {}

    public onSubmit(): void {
        if(this.authForm.invalid) {
            return;
        }

        this.authService.register(this.authForm.value);

        this.authService.signin$.subscribe((state) => {
            if(state) this.router.navigateByUrl('/map');
        })
    }
}

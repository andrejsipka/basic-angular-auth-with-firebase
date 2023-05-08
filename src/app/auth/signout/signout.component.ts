import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Services
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss']
})
export class SignoutComponent implements OnInit {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    public ngOnInit(): void {
        this.authService.logout()
            .then(() => {
                this.router.navigateByUrl('/');
            });
    }
}

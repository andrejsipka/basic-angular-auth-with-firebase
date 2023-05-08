import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// Services
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'event-map';

    public readonly readSignin$: Observable<boolean> = new Observable();

    constructor(
        private authService: AuthService
    ) {
        this.readSignin$ = this.authService.signin$;
    }

    public ngOnInit(): void {
        this.authService.checkAuth();
    }
}

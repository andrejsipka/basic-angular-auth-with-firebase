import { Injectable, inject } from '@angular/core';
import {  Router, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { BehaviorSubject, Observable} from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PermissionsService {
    public isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(
        private authFire: Auth,
        private router: Router
    ) {}

    canActivate(): Observable<boolean> {
        onAuthStateChanged(this.authFire, (user) => {
            const isAuthenticated = user ? true : false;
            this.isAuthenticated$.next(isAuthenticated);
        });

        return this.isAuthenticated$.asObservable().pipe(
            tap((authenticated) => {
                if(!authenticated) {
                    this.router.navigateByUrl('/');
                }
            })
        );
    }

    canMatch(): Observable<boolean> {
        onAuthStateChanged(this.authFire, (user) => {
            const isAuthenticated = user ? true : false;
            this.isAuthenticated$.next(isAuthenticated);
        });

        return this.isAuthenticated$.asObservable().pipe(
            tap((authenticated) => {
                if(!authenticated) {
                    this.router.navigateByUrl('/');
                }
            })
        );
    }
}

// !!! Possible to make it work this way. But not able to choose betwen CanMatch or CanActivate
// export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
//       return inject(PermissionsService).canMatch();
// };



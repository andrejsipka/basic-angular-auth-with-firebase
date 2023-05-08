import { Injectable, inject } from '@angular/core';
import {  Router, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { skipWhile, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PermissionsService {
    public isAuthenticated$: Subject<boolean> = new Subject();

    constructor(
        private authFire: Auth,
        private router: Router
    ) {}

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



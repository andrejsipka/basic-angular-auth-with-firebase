import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// Firebase auth
import { Auth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "@angular/fire/auth";

interface Credentials {
    username: string,
    password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    public signin$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(
        private authFire: Auth,
    ) { }

    public register({ username, password }: Credentials) {
        return createUserWithEmailAndPassword(this.authFire, username, password)
            .then((userCredentials) => {
                this.signin$.next(true);
            });
    }

    public login({ username, password }: Credentials) {
        signInWithEmailAndPassword(this.authFire, username, password)
            .then((userCredentials) => {
                this.signin$.next(true);
            })
    }

    public logout() {
        return signOut(this.authFire)
            .then(() => {
                this.signin$.next(false);
            });
    }

    public checkAuth() {
        return onAuthStateChanged(this.authFire, (user) => {
            if(user) {
                this.signin$.next(true);
            } else {
                console.warn('YOU are logged out', user);
                this.signin$.next(false);
            }
        });
    }
}

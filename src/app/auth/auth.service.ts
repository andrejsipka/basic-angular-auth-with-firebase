import { Injectable } from '@angular/core';
// Firebase auth
import { Auth, createUserWithEmailAndPassword } from "@angular/fire/auth";

interface Credentials {
    username: string,
    password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor(
        private authFire: Auth,
    ) { }

    public register({ username, password}: Credentials) {
        return createUserWithEmailAndPassword(this.authFire, username, password);
    }

    public login(username: string, password: string) {
        return createUserWithEmailAndPassword(this.authFire, username, password);
    }
}

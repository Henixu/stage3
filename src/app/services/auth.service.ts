// auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInVar = false;

  isLoggedIn(): boolean {
    return this.isLoggedInVar;
  }

  login() {
    // Implement your login logic here
    this.isLoggedInVar = true;
  }

  logout() {
    // Implement your logout logic here
    this.isLoggedInVar = false;
  }
}

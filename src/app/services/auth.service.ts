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
   
    this.isLoggedInVar = true;
  }

  logout() {
    
    this.isLoggedInVar = false;
  }
}

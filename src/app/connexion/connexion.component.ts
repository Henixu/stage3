import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignInService } from '../services/sign-in.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  signupForm: FormGroup;
  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private authService: AuthService,
    private signinService: SignInService,
    private router: Router
  ) {
    // Initialize signup form
    this.signupForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]]
    });

    // Initialize login form
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]]
    });
  }

  onSignUp(): void {
    if (this.signupForm.valid) {
      const { userName, email, password } = this.signupForm.value;
      console.log(userName, email, password);

      this.signinService.register(userName, email, password)
        .subscribe(
          response => {
            alert('Sign up success');
            console.log(response);
          },
          error => {
            alert('Sign up failed');
          }
        );
    } else {
      alert('Invalid form. Please check the fields.');
    }
  }

  // Custom password validator
  passwordValidator(control: any) {
    const value = control.value;

    // Check if the password contains at least one letter and one digit, and has a minimum length of 4
    const hasLetter = /[a-zA-Z]/.test(value);
    const hasDigit = /\d/.test(value);
    const minLength = value.length >= 4;

    // Return validation result
    const isValid = hasLetter && hasDigit && minLength;
    return isValid ? null : { invalidPassword: true };
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.loginService.login(email, password)
        .subscribe(
          response => {
            localStorage.setItem('user', response.email);
            alert('Welcome');
            this.authService.login();
            this.router.navigate(['/']);
          },
          error => {
            alert('Login failed');
          }
        );
    } else {
      alert('Invalid form. Please check the fields.');
    }
  }
}

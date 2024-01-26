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

  constructor(private loginService: LoginService,private fb: FormBuilder, private authService: AuthService,private signinService: SignInService, private router: Router) {

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
  email: string = "";
  password: string = "";
  nom: string = "";
  onSignUp():void{
   

  const nom = this.signupForm.get('userName')!.value;
  const email = this.signupForm.get('email')!.value;
  const password = this.signupForm.get('password')!.value;
    console.log(this.nom,this.email,this.password);
    this.signinService.register(nom,email,password)
      .subscribe(response => {
        alert('sign in success');
        console.log(response);
      }, error => {
        alert('register failed')   
      });
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

  // Function to handle signup form submission
  

  // Function to handle login form submission
  email_Login: string = ""; 
  password_Login: string = "";
  onLogin() {
    const email_Login = this.email_Login;
    const password_Login = this.password_Login;

    this.loginService.login(email_Login,password_Login)
      .subscribe(response => {
        localStorage.setItem('user',response.email)
        alert('bienvenu')
        this.authService.login();

        this.router.navigate(['/']);

      }, error => {
        alert('login failed');
      });
  }
}

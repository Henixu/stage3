import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor (private router:Router, private authService: AuthService){

  }
  goToconnexion(){
    this.router.navigate(["/connexion"]);
  }
  

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}

  import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; 
  @Component({
    selector: 'app-formulaire',
    templateUrl: './formulaire.component.html',
    styleUrl: './formulaire.component.css'
  })
  export class FormulaireComponent {
    constructor( private router: Router,private authService: AuthService) {}
    submitForm() {
      try {
        this.authService.login();
        this.router.navigate(['/formulaire']);
      } catch (error) {
        console.error('Navigation error:', error);
      }
      // Get a reference to the form element
      const formElement = document.getElementById('form') as HTMLFormElement;

      const formData = new FormData(formElement);
      const formFields: string[] = [];
      formData.forEach((value, key) => {
        formFields.push(`${key}: ${value}`);
      });

      const textContent = formFields.join('\n');

      // Create a Blob containing the text content
      const blob = new Blob([textContent], { type: 'text/plain' });

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'form_data.txt';
      document.body.appendChild(link);
      link.click();

      
      this.router.navigate(['/formulaire']);

  
      
      console.log('Form submitted!');
      
    }
  }

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
      // Parse the text content into an object
    const formDataObject: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value.toString();
    });

    // Convert the object into an XML string
    const xmlString = this.objectToXml(formDataObject);

    // Create a Blob containing the XML content
    const blob = new Blob([xmlString], { type: 'application/xml' });

    // Trigger the download of the XML file
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'form_data.xml';
    document.body.appendChild(link);
    link.click();

      
      this.router.navigate(['/formulaire']);

  
      
      console.log('Form submitted!');
      
    }
    objectToXml(obj: { [key: string]: string }): string {
      let xmlString = '<?xml version="1.0" encoding="UTF-8"?>\n';
      xmlString += '<form_data>\n';
  
      for (const [key, value] of Object.entries(obj)) {
        xmlString += `<${key}>${value}</${key}>\n`;
      }
  
      xmlString += '</form_data>';
      return xmlString;
    }
  }

import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {
  submitForm() {
    // Get a reference to the form element
    const formElement = document.getElementById('form') as HTMLFormElement;

    // Create a FormData object to easily access form fields and their values
    const formData = new FormData(formElement);

    // Create an array to store field name-value pairs
    const formFields: string[] = [];

    // Iterate through form fields and store name-value pairs
    formData.forEach((value, key) => {
      formFields.push(`${key}: ${value}`);
    });

    // Create a text content with field name-value pairs
    const textContent = formFields.join('\n');

    // Create a Blob containing the text content
    const blob = new Blob([textContent], { type: 'text/plain' });

    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'form_data.txt';

    // Append the link to the document and trigger a click event
    document.body.appendChild(link);
    link.click();

    

    console.log('Form submitted!');
  }
}

import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  form: FormGroup = this.fb.group({
    form_name: '',
    to_name: 'Admin',
    subject:"",
    form_email:"",
    message:""
  });
  constructor(private fb :FormBuilder){}
async send(){
    emailjs.init('C3sXGinSdmlskDEJq');
    let reponse = await emailjs.send("service_y79xovv","template_xgiy6sj",{
    from_name: this.form.value.form_name,
    to_name: this.form.value.to_name,
    subject: this.form.value.subject,
    form_email: this.form.value.form_email,
    message: this.form.value.message,
    });
    alert("votre message est bien envoyer ");
  }
}

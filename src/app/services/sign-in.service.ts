import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SignInService {

  private baseUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }
   
  register(nom: string, email: string, password: string): Observable<any> {
    const signinUrl = `${this.baseUrl}/responsable`; 
    return this.http.post(signinUrl,{nom,email,password});
  }
}

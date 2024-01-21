import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:3000'; 

  private personnesUrl = `${this.baseUrl}/responsable`;
  constructor(private http: HttpClient) { }

  userExists(email: string): Observable<boolean> {
    return this.http.get<any[]>(this.personnesUrl).pipe(
      map(personnes => {
        const foundPerson=personnes.find(person => person.email === email );
        return !!foundPerson; // Returns true if email exists,false otherwise
      })
    );
  }

  login(email: string, password: string): Observable<any> {
    return this.userExists(email).pipe(
      switchMap(userExists => {
        if (userExists) {
          const loginUrl = `${this.baseUrl}/login`;
          return this.http.post(loginUrl,{email,password});
        } else{
         
          return of({error: 'User does not exist'});
        }
      })
    );
  }
}

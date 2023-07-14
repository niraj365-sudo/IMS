import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL = 'http://localhost:3000/users/'
  constructor(private http: HttpClient) { }

  register(user:any){
    const header = new HttpHeaders({
      'Content-Type' : 'application/json'
    })
   return this.http.post(`${this.apiURL}register`, user, { headers:header })
  }

  login(user:any){
   return this.http.post(`${this.apiURL}login`, user)
  }
}

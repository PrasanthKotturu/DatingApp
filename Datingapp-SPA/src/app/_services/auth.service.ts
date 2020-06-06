import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { logging } from 'protractor';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseurl = 'http://localhost:5000/api/';
  jwthelper = new JwtHelperService();
  decodedToken: any;
  constructor(private http: HttpClient) {}
  login(model: any) {
    return this.http.post(this.baseurl + 'auth/login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwthelper.decodeToken(user.token);
          console.log(this.decodedToken);
        }
      })
    );
  }
  register(model: any) {
    return this.http.post(this.baseurl + 'auth/register', model);
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwthelper.isTokenExpired(token);
  }
}

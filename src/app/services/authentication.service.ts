import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { SERVER_URL } from './config';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public http: HttpClient) { }

  login(user:User) {
    return this.http.post<User>(`${SERVER_URL}login`,user)
      .pipe(map( (currentUser:any) => {
        if(currentUser.data) {
          localStorage.setItem('currentUser',currentUser.data.token);
        }
        return currentUser;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}

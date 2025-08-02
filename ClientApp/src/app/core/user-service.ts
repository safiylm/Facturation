import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';



@Injectable({
  providedIn: 'root'
})

export class UserService {

  url = "http://localhost:64075"

  constructor(private http: HttpClient) { }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + `/api/users`);
  }


  create(user: any): Observable<any> {
    return this.http.post(this.url + `/api/users/create`,
      user, { responseType: 'text' } )
  }

  edit(user: User): Observable<any> {
    return this.http.post(this.url + `/api/users/edit`,
      user//, { responseType: 'text' }
      )
  }

  delete(id: number): Observable<any> {
    return this.http.post(this.url + `/api/users/delete`,
      id, { responseType: 'text' })
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.url + `/api/users/byId?id=`+id);
  }

  login(email: string, password: string) {
    return this.http.post(this.url + `/api/users/login`,
      "jean@example.com");

  }
}

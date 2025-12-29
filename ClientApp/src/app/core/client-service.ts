import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';



@Injectable({
  providedIn: 'root'
})

export class ClientService {

  url = "http://localhost:5293"

  constructor(private http: HttpClient) { }


  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url + `/api/clients`);
  }

  
  getClientsByAuteurId(id: number): Observable<Client[]> {
    return this.http.get<Client[]>(
      `${this.url}/api/clients/byAuteurId?id=${id}`
    );
  }


  create(client: any): Observable<any> {
    return this.http.post(this.url + `/api/clients/create`,
      client)
  }

  edit(client: Client): Observable<any> {
    return this.http.post(this.url + `/api/clients/edit`,
      client)
  }

  delete(id: number): Observable<any> {
    return this.http.post(this.url + `/api/clients/delete`,
      id)
  }

  getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(this.url + `/api/clients/byId?id=` + id);
  }

}

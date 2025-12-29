import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Devis } from '../models/devis.model';



@Injectable({
  providedIn: 'root'
})

export class Deviservice {

  url = "http://localhost:5293"

  constructor(private http: HttpClient) { }


  getDevis(): Observable<Devis[]> {
    return this.http.get<Devis[]>(this.url + `/api/devis`);
  }

  getDevisByAuteurId(id: number): Observable<Devis[]> {
    return this.http.get<Devis[]>(this.url + `/api/devis/byAuteurId?id=` + id);
  }

  create(devis: any): Observable<any> {
    return this.http.post(this.url + `/api/devis/create`,
      devis)
  }

  edit(devis: Devis): Observable<any> {
    return this.http.post(`${this.url}/api/devis/edit`, devis);
  }

  delete(id: number): Observable<any> {
    return this.http.post(this.url + `/api/devis/delete`,
      id)
  }

  getDevisById(id: number): Observable<Devis> {
    return this.http.get<Devis>(this.url + `/api/devis/byId?id=` + id);
  }

}

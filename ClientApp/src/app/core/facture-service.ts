import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facture } from '../models/facture.model';



@Injectable({
  providedIn: 'root'
})

export class FactureService {

  url = "http://localhost:64075"

  constructor(private http: HttpClient) { }


  getFactures(): Observable<Facture[]> {
    return this.http.get<Facture[]>(this.url + `/api/factures`);
  }


  create(facture: any): Observable<any> {
    return this.http.post(this.url + `/api/factures/create`,
      facture, { responseType: 'text' })
  }

  edit(facture: Facture): Observable<any> {
    return this.http.post(this.url + `/api/factures/edit`,
      facture , { responseType: 'text' })
  }

  delete(id: number): Observable<any> {
    return this.http.post(this.url + `/api/factures/delete`,
      id, { responseType: 'text' })
  }

  getFactureById(id: number): Observable<Facture> {
    return this.http.get<Facture>(this.url + `/api/factures/byId?id=`+id);
  }

}

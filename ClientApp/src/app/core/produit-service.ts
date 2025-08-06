import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit.model';



@Injectable({
  providedIn: 'root'
})

export class ProduitService {

  url = "http://localhost:64075"

  constructor(private http: HttpClient) { }


  getProduitss(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.url + `/api/produits`);
  }


  create(produit: any): Observable<any> {
    return this.http.post(this.url + `/api/produits/create`,
      produit, { responseType: 'text' } )
  }

  edit(produit: Produit): Observable<any> {
    return this.http.post(this.url + `/api/produits/edit`,
      produit, { responseType: 'text' })
  }

  delete(id: number): Observable<any> {
    return this.http.post(this.url + `/api/produits/delete`,
      id, { responseType: 'text' })
  }

  getProduitById(id: number): Observable<Produit> {
    return this.http.get<Produit>(this.url + `/api/produits/byId?id=`+id);
  }

  getProduitFactureById(id: number): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.url + `/api/produits/byFactureId?id=` + id);
  }

}

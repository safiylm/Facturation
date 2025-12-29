import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit.model';



@Injectable({
  providedIn: 'root'
})

export class ProduitService {

  url = "http://localhost:5293"

  constructor(private http: HttpClient) { }


  getProduitss(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.url + `/api/produits`);
  }


  create(produit: any): Observable<any> {
    return this.http.post(this.url + `/api/produits/create`,
      produit )
  }

  edit(produit: Produit): Observable<any> {
    return this.http.post(this.url + `/api/produits/edit`,
      produit)
  }

  delete(id: number): Observable<any> {
    return this.http.post(this.url + `/api/produits/delete`,
      id)
  }

  getProduitById(id: number): Observable<Produit> {
    return this.http.get<Produit>(this.url + `/api/produits/byId?id=`+id);
  }

   
    getProduitsByAuteurIdWithResolver(id: string ): Promise<Produit[]> {
      return new Promise((resolve) => {
        setTimeout(() => {
          return this.http.get<Produit[]>(this.url + `/api/produits/byFactureId?id=` +
          Number( id )
          )
            .subscribe(response => {
              resolve(response)
            }, err => {
              console.log(err.message);
            }, () => {
              console.log('completed');
            }
            );
        }, 1000);
      })
    }
  
  getProduitFactureById(id: number ): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.url + `/api/produits/byFactureId?id=` + id);
  }

}

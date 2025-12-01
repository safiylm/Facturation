import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ClientService } from '../client-service';
import { Client } from 'src/app/models/client.model';
import { ProduitService } from '../produit-service';
import { Produit } from 'src/app/models/produit.model';


@Injectable({
  providedIn: 'root'
})

export class ProduitsResolverService implements Resolve<Produit[]> {
  constructor(private produit: ProduitService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Produit[]> {
    return this.produit.getProduitFactureById(Number(route.paramMap.get("id")?.toString() as string))
      .pipe(
        catchError(error => {
          console.error("Resolver Produit ERROR :", error);
          return of([]); // valeur par défaut pour éviter les crashs
        })
      );
  }
}

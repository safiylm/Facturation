import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Facture } from 'src/app/models/facture.model';
import { FactureService } from '../facture-service';


@Injectable({
  providedIn: 'root'
})

export class FacturesResolverService implements Resolve<Facture[]>  {
  constructor(private facture : FactureService ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Facture[]> {
    return this.facture.getFacturesByAuteurId(2)
   // return this.facture.getFacturesByAuteurId(Number(localStorage.getItem("userId")))
      .pipe(
        catchError(error => {
          console.error("Resolver facture ERROR :", error);
          return of([]); // valeur par défaut pour éviter les crashs
        })
      );
  }
}

import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ClientService } from '../client-service';
import { Client } from 'src/app/models/client.model';


@Injectable({
  providedIn: 'root'
})

export class ClientsResolverService implements Resolve<Client[]> {

  constructor(private client: ClientService) {}

  resolve(): Observable<Client[]> {
    return this.client.getClientsByAuteurId(2).pipe(
    //return this.client.getClientsByAuteurId(Number(localStorage.getItem("userId"))).pipe(
      catchError(error => {
        console.error("Resolver Client ERROR :", error);
        return of([]); // valeur par défaut pour éviter les crashs
      })
    );
  }
}


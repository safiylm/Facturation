import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../core/client-service';
import { Client } from '../../../models/client.model';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  id = "";
  resultat = "";

  client !: Client;
  ngOnInit(): void {
    this.clientService.getClientById(Number(this.id)).subscribe(
      (client) => {
        this.client = client;
      }
    )
  }

  constructor(private route: ActivatedRoute, private clientService: ClientService) {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

  edit() {
    this.clientService.edit( this.client ).subscribe(
      {
      next: (res) => {
        console.log(res); // ✅ { message: "..."}
        this.resultat = res.message + " ✅ ";
      },
      error: (err) => {
        console.error('Erreur API :', err);
      }
    })
  }

  delete() {
   if( confirm("Etes vous sur de supprimer?"))
    this.clientService.delete( Number(this.id) ).subscribe(
      {
        next: (res) => {
          console.log(res); // ✅ { message: "..."}
          this.resultat = res.message + " ✅ ";
        },
        error: (err) => {
          console.error('Erreur API :', err);
        }
      })
  }

}

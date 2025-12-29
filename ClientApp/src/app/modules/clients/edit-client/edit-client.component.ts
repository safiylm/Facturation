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
  loading = false;
  error = '';

  client !: Client;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;

    this.clientService.getClientById(Number(this.id)).subscribe(
      (client) => {
        this.client = client;
        console.log(client)
      }
    )
  }

  constructor(private route: ActivatedRoute, private clientService: ClientService) {
  }

  edit() {
    this.loading = true;
    this.error = '';
    this.resultat = "";

    this.clientService.edit(this.client).subscribe(
      {
        next: (res) => {
          this.loading = false;
          this.resultat = res.message + " ✅ ";
        },
        error: (err) => {
          console.error('Erreur API :', err);
          this.error = 'Erreur lors de la requête POST';
          this.loading = false;
        }
      })
  }

  delete() {
    this.loading = true;
    this.error = '';
    this.resultat = "";

    if (confirm("Etes vous sur de supprimer?"))
      this.clientService.delete(Number(this.id)).subscribe(
        {
          next: (res) => {
            this.loading = false;
            this.resultat = res.message + " ✅ ";
            setTimeout(() => {
              location.href = ""
            }, 1500)
          },
          error: (err) => {
            console.error('Erreur API :', err);
            this.error = 'Erreur lors de la requête POST';
            this.loading = false;
          }
        })
  }

}

import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../core/client-service';
import { Client } from '../../../models/client.model';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.css']
})
export class ListeClientsComponent implements OnInit {

  constructor(private clientService: ClientService) { }
  searchClient = ""

  liste !: Client[];

  ngOnInit(): void {
    this.clientService.getClientsByAuteurId(Number(localStorage.getItem("userId"))
    ).subscribe((clients) => {
      this.liste = clients;
      localStorage.setItem("nbClients",this.liste.length.toString())
    });
  }
}

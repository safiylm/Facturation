import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../core/client-service';
import { Client } from '../../../models/client.model';

@Component({
  selector: 'app-select-client',
  templateUrl: './select-client.component.html',
  styleUrls: ['./select-client.component.css']
})
export class SelectClientComponent implements OnInit {

  constructor(private clientService: ClientService) { }

  liste !: Client[];
  resultat = "";

  ngOnInit(): void {

    this.clientService.getClients().subscribe((clients) => {
      this.liste = clients;
    });
  }
}

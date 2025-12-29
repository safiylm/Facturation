import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../core/client-service';
import { Client } from '../../../models/client.model';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {

  @Input() id!: number;
  client !: Client;

  ngOnInit(): void {
    this.clientService.getClientById(Number(this.id)).subscribe(
      (client) => {
        this.client = client;
      }
    )
    this.client = new Client(4, "Jean", "Marie", 'marie@gmail.Com', 'rue du vivarais', "06 05 23 12 45", 12, "", "", 0)
  }

  constructor( private clientService: ClientService) {
  }

}

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
  }

  constructor( private clientService: ClientService) {
  }

}

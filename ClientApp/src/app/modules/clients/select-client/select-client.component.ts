import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ClientService } from '../../../core/client-service';
import { Client } from '../../../models/client.model';

@Component({
  selector: 'app-select-client',
  templateUrl: './select-client.component.html',
  styleUrls: ['./select-client.component.css']
})
export class SelectClientComponent implements OnInit {

  constructor(private clientService: ClientService) { }
  @Output() createEvent = new EventEmitter<any>();
  @Output() getClientIDEvent = new EventEmitter<number>();

  liste !: Client[];
  resultat = "";
  clientSelect = 0;

  ngOnInit(): void {
    this.clientService.getClientsByAuteurId(Number(localStorage.getItem("userId")))
      .subscribe((clients) => {
        this.liste = clients;
      });
  }

  openCreateForm() {
    this.createEvent.emit('create');
  }


  select() {
    this.resultat = "chargement";
    setTimeout(() => {
      this.resultat = "";
      this.getClientIDEvent.emit(this.clientSelect);
    }, 4000);
  }

}

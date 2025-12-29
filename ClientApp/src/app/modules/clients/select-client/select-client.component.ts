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

    const saved = sessionStorage.getItem('clientId');
    if (saved) {
      this.clientSelect = Number(saved);
    }
  }

  openCreateForm() {
    this.createEvent.emit('create');
  }


  select_submit() {
    if (this.clientSelect != 0) {
      this.resultat = "chargement";
      setTimeout(() => {
        this.resultat = "";
        this.getClientIDEvent.emit(this.clientSelect);
      }, 1000);

    } else
      this.resultat = "Selectionner le client de votre choix.";

  }

  select(id: number) {
    if (id != 0) {
      this.clientSelect = id
      sessionStorage.setItem('clientId', id.toString())
    }
  }


}

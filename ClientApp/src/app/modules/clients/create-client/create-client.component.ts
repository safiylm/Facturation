import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ClientService } from '../../../core/client-service';
import { Client } from '../../../models/client.model';
import { transition, style, animate, trigger } from '@angular/animations';

const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('0.5s ease-in', style({
    opacity: 1
  }))
]);

const leaveTrans = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('0.5s ease-out', style({
    opacity: 0
  }))
])

const fadeIn = trigger('fadeIn', [
  enterTransition
]);

const fadeOut = trigger('fadeOut', [
  leaveTrans
]);


@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css'],
  animations: [
    fadeIn,
    fadeOut
  ]
})

export class CreateClientComponent {

  constructor(private clientService: ClientService) { }

  resultat = "";
  @Output() getClientIDEvent = new EventEmitter<number>();

  @Output() selectEvent = new EventEmitter<any>();


   client = {
     Nom: '',
     Prenom: '',
     Email: '',
     Entreprise: "",
     Adresse: '',
     Phone: '',
     CreatedAt: new Date(),
     AuteurId: Number(localStorage.getItem('userId') )
  };


  create() {
    this.resultat = "chargement"
    setTimeout(() => {
      this.resultat = "ok"

    }, 2000)

    setTimeout(() => {
      this.resultat = ""
      this.getClientIDEvent.emit(5);
    }, 4000)


    this.clientService.create(this.client).subscribe({
      next: (res) => {
        console.log( res ); // ✅ { message: "..."}
        this.resultat = res.message+" ✅ ";
      },
      error: (err) => {
        console.error('Erreur API :', err);
      }
    })
  }

  openSelectForm() {
    this.selectEvent.emit("select");
  }

}


import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ClientService } from '../../../core/client-service';
import { transition, style, animate, trigger } from '@angular/animations';



@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css'],
})

export class CreateClientComponent {

  constructor(private clientService: ClientService) { }

  resultat = "";
  loading = false;
  error = '';

  @Output() getClientIDEvent = new EventEmitter<number>();
  @Output() selectEvent = new EventEmitter<any>();

  client = {
    Nom: '',
    Prenom: '',
    Email: '',
    RaisonSocial: "",
    NumeroTVA: "",
    SIRET: 0,
    Adresse: '',
    Phone: '',
    CreatedAt: new Date(),
    AuteurId: Number(localStorage.getItem('userId'))
  };

  ngOnInit() {
    const saved = sessionStorage.getItem('client');
    if (saved) {
      this.client = JSON.parse(saved);
    } else {
      console.log(sessionStorage.getItem("client"))
    }
  }

  create() {
    this.loading = true;
    this.error = '';
    this.resultat = "";


    if (this.client.Nom != "" &&
      this.client.Prenom != "" &&
      this.client.Email != "" &&
      this.client.Adresse != "" &&
      this.client.Phone != "" &&
      this.client.AuteurId != 0
    )
      this.clientService.create(this.client).subscribe({
        next: (res) => {
          console.log(res); // ✅ { message: "..."}
          this.loading = false;
          this.resultat = res.message + " ✅ ";
          setTimeout(() => {
            this.resultat = ""
            if (res.id != null) {
              sessionStorage.removeItem('client');
              this.getClientIDEvent.emit(res.id);
            }
          }, 1900)


        },
        error: (err) => {
          console.error('Erreur API :', err);
          this.error = 'Erreur lors de la requête POST';
          this.loading = false;
        }
      })
    else {
      this.resultat = "Les champs sont vides... ❌"
    }
  }

  saveauto() {
    sessionStorage.setItem("client", JSON.stringify(this.client))
    console.log(sessionStorage.getItem("client"))
  }

  openSelectForm() {
    this.selectEvent.emit("select");
  }

}


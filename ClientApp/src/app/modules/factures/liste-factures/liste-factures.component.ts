import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../core/client-service';
import { FactureService } from '../../../core/facture-service';
import { Facture } from '../../../models/facture.model';

@Component({
  selector: 'app-liste-factures',
  templateUrl: './liste-factures.component.html',
  styleUrls: ['./liste-factures.component.css']
})
export class ListeFacturesComponent implements OnInit {


  liste !: Facture[];
  resultat = "";
  searchFacture = ""
  totalFacture = 0
  factureEnAttente = 0
  constructor(private factureService: FactureService) { }

  ngOnInit(): void {

    this.factureService.getFacturesByAuteurId(Number(localStorage.getItem("userId"))).subscribe((fac) => {
      this.liste = fac;
      for (let f of this.liste) {

        if (f.status == "Payés")
          this.totalFacture = this.totalFacture + f.totalHT + f.totalTVA

        if (f.status.trim() == "En Attente")
          this.factureEnAttente = this.factureEnAttente + 1
      }
      localStorage.setItem("factureEnAttente", this.factureEnAttente.toString())
      localStorage.setItem("totalFacture", this.totalFacture.toString())


    });
  }

  search() {
    for (let fact of this.liste) {
      if (this.searchFacture == fact.titre) {

      }
    }
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Deviservice } from 'src/app/core/devis-service';
import { Devis } from 'src/app/models/devis.model';

@Component({
  selector: 'app-liste-devis',
  templateUrl: './liste-devis.component.html',
  styleUrls: ['./liste-devis.component.css']
})
export class ListeDevisComponent implements OnInit {

  liste !: Devis[];
  searchDevis = ""
  totalFacture = 0
  factureEnAttente = 0

  constructor(private devisService: Deviservice,private route: ActivatedRoute) {
    this.liste = this.route.snapshot.data['factures'];
  }

  ngOnInit(): void {

    this.devisService.getDevisByAuteurId(Number(localStorage.getItem("userId"))).subscribe((fac) => {
      this.liste = fac;
     
      localStorage.setItem("factureEnAttente", this.factureEnAttente.toString())
      localStorage.setItem("totalFacture", this.totalFacture.toString())
    });
 }

  search() {
  }
}

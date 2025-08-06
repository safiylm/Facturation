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
  
  constructor(private factureService: FactureService) { }

  ngOnInit(): void {

    this.factureService.getFactures().subscribe((fac) => {
      this.liste = fac;
    });


  }


}

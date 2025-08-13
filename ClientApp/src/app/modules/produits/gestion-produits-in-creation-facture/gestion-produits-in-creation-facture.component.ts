import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../../../core/produit-service';
import { Produit } from '../../../models/produit.model';

@Component({
  selector: 'app-gestion-produits-in-creation-facture',
  templateUrl: './gestion-produits-in-creation-facture.component.html',
  styleUrls: ['./gestion-produits-in-creation-facture.component.css']
})
export class GestionProduitsInCreationFactureComponent implements OnInit {

  constructor() { }

  @Output() createFactureEvent = new EventEmitter<any>();
  liste : Produit[] = [];

  ngOnInit(): void {
  }

  produit = {
    quantite: 1,
    designation: 'Iphone 16',
    prixUnitaireHT: 900,
    TVA: 99,
    factureId: 2,
    createdAt: new Date()
  };

  totalHT = 0;
  totalTVA=0
 

  add(produit: any) {
    this.liste.push(produit)
    this.totalTVA = this.totalTVA + produit.tva
    this.totalHT = this.totalHT + produit.prixUnitaireHT
  }


  edit(i: number, prod: any) {
    this.liste[i] = prod

    this.totalHT = 0;
    this.totalTVA = 0
    for (let prod of this.liste) {
      this.totalTVA = this.totalTVA + prod.tva
      this.totalHT = this.totalHT + prod.prixUnitaireHT
    }
  }



  save() {
  
    this.createFactureEvent.emit([this.liste, this.totalHT, this.totalTVA]);
  }

}

import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produit } from '../../../models/produit.model';

@Component({
  selector: 'app-create-produit',
  templateUrl: './create-produit.component.html',
  styleUrls: ['./create-produit.component.css']
})
export  class CreateProduitComponent{

  constructor() { }

  @Output() createProduitEvent = new EventEmitter<any>();

  produit = {
    quantite: 1,
    designation : 'PANTALON',
    prixUnitaireHT: 9,
    tva: .99,
    factureId: 2,
    createdAt: new Date()
  };

  addNewItem() {
    const produitClone = { ...this.produit }; // éviter de partager la même instance
    this.createProduitEvent.emit(produitClone);
  }


}

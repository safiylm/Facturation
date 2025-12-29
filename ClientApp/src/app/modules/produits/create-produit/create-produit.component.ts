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
    designation : '',
    prixUnitaireHT: 0,
    tva: 0,
    factureId: 0,
    createdAt: new Date()
  };

  addNewItem() {
    const produitClone = { ...this.produit }; // éviter de partager la même instance
    this.createProduitEvent.emit(produitClone);
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-produits',
  templateUrl: './gestion-produits.component.html',
  styleUrls: ['./gestion-produits.component.css']
})
export class GestionProduitsComponent implements OnInit {

  constructor() { }

  liste: any[] = [];

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

  add(produit: any) {
    this.liste.push(produit)
  }


  edit(i: number, prod: any) {
    this.liste[i] = prod
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../../../core/produit-service';
import { Produit } from '../../../models/produit.model';

@Component({
  selector: 'app-gestion-produits-in-edit-facture',
  templateUrl: './gestion-produits-in-edit-facture.component.html',
  styleUrls: ['./gestion-produits-in-edit-facture.component.css']
})
export class GestionProduitsInEditFactureComponent implements OnInit {


  constructor(private route: ActivatedRoute,
    private produitService: ProduitService) { }

  @Output() editFactureEvent = new EventEmitter<any>();
  liste !: Produit[];
  id !: number;
  totalHT = 0;
  totalTVA = 0;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')!);

    this.produitService.getProduitFactureById(this.id).subscribe(
      (data) => {
        this.liste = data;
        console.log(this.liste)
        for (let prod of this.liste) {
          this.totalTVA = this.totalTVA + prod.tva
          this.totalHT = this.totalHT + prod.prixUnitaireHT
        }
      })
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

    this.editFactureEvent.emit([this.liste, this.totalHT, this.totalTVA]);
  }

}

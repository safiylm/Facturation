import { Component, Input, OnInit } from '@angular/core';
import { ProduitService } from '../../../core/produit-service';
import { Produit } from '../../../models/produit.model';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  @Input() id!: number;
  liste !: Produit[];

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.produitService.getProduitFactureById(this.id).subscribe(
      (data) => {
        this.liste = data;
        console.log(this.liste)
      }    )
  }

}

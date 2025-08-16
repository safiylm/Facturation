import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FactureService } from '../../../core/facture-service';
import { ProduitService } from '../../../core/produit-service';
import { Facture } from '../../../models/facture.model';
import { Produit } from '../../../models/produit.model';

@Component({
  selector: 'app-edit-factures',
  templateUrl: './edit-factures.component.html',
  styleUrls: ['./edit-factures.component.css']
})

export class EditFacturesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private factureService: FactureService,
    private produitService: ProduitService) { }
  resultat = "";

  facture!: Facture;
  listeProduit !: Produit[];
  id !: number;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')!);
    this.factureService.getFactureById(this.id).subscribe(
      (data) => {
        this.facture = data
      })
  }

  
  getProduits(liste: any) {
    console.log(liste);
    this.listeProduit = liste[0]
    this.facture.totalHT = liste[1]
    this.facture.totalTVA = liste[2]
    this.factureService.edit(this.facture).subscribe(
      (data) => {
        console.log(data)
        for (let prod of this.listeProduit) {
          this.produitService.edit(prod).subscribe(
            (data1) => {
              this.resultat = data1.message
            })
        }
      })

  }

}

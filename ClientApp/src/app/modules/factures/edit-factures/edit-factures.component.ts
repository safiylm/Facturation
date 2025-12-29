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

  facture!: Facture;
  listeProduit !: Produit[];
  id !: number;
  result !: any;
  loading = false;
  error = '';

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')!);
    this.factureService.getFactureById(this.id).subscribe(
      (data) => {
        this.facture = data
      })
  }


  getProduits(liste: any) {

    this.loading = true;
    this.error = '';
    this.result = null;

    this.listeProduit = liste[0]
    this.facture.totalHT = liste[1]
    this.facture.totalTVA = liste[2]
    this.factureService.edit(this.facture)
      .subscribe({
        next: (data: any) => {
          console.log(data)
          for (let prod of this.listeProduit) {
            this.produitService.edit(prod).subscribe(
              (data1) => {
                console.log(data1)
                this.loading = false;
                this.result = data1.message
              })
          }
        }
        ,
        error: (err) => {
          this.error = 'Erreur lors de la requête POST';
          this.loading = false;
        }
      }
      )
  }

}

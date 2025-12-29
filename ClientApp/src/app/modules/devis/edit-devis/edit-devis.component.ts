import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FactureService } from '../../../core/facture-service';
import { ProduitService } from '../../../core/produit-service';
import { Facture } from '../../../models/facture.model';
import { Produit } from '../../../models/produit.model';
import { Deviservice } from 'src/app/core/devis-service';
import { Devis } from 'src/app/models/devis.model';

@Component({
  selector: 'app-edit-devis',
  templateUrl: './edit-devis.component.html',
  styleUrls: ['./edit-devis.component.css']
})
export class EditDevisComponent implements OnInit {


  constructor(private route: ActivatedRoute, private devisservice: Deviservice,
    private produitService: ProduitService) { }
  resultat !: any;
  loading = false;
  error = '';

  devis!: Devis;
  listeProduit !: Produit[];
  id !: number;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')!);
    this.devisservice.getDevisById(this.id).subscribe(
      (data) => {
        this.devis = data
      })
  }


  getProduits(liste: any) {
    this.loading = true;
    this.resultat = null;


    console.log(liste);
    this.listeProduit = liste[0]
    this.devis.totalHT = liste[1]
    this.devis.totalTVA = liste[2]
    this.devisservice.edit(this.devis)   .subscribe({
          next: (data: any) => {
        console.log(data)
        for (let prod of this.listeProduit) {
          this.produitService.edit(prod).subscribe(
            (data1) => {
              console.log(data1)
              this.resultat = data1.message
              this.loading = false;
            })
        }
      }, 
        error: (err) => {
          this.error = 'Erreur lors de la requête POST';
          this.loading = false;
        }}
    )

  }

}

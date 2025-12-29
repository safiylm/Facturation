import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../../core/produit-service';
import { Deviservice } from 'src/app/core/devis-service';

@Component({
  selector: 'app-create-devis',
  templateUrl: './create-devis.component.html',
  styleUrls: ['./create-devis.component.css']
})
export class CreateDevisComponent implements OnInit {

  constructor(
    private devisService: Deviservice,
    private produitService: ProduitService) { }

  listeProduits !: any;
  resultat = ""
  clientchoix = "select"
  clientId = 0
  formProduitIsSubmit = false;
  currentDate = new Date();
  result !: any;
  loading = false;
  error = '';

  ngOnInit(): void {
  }

  getClientId(newItem: number) {
    this.clientId = newItem
  }

  facture = {
    clientId: this.clientId,
    userId: Number(localStorage.getItem('userId')),
    titre: 'Facture ',
    totalTVA: 0,
    totalHT: 0,
    remarques: "Paiement en carte bancaire, en 4 fois.",
    type: "standard",
    status: "Brouillon",
    validite: new Date(),
    createdAt: new Date()
  };

  getProduits(listeproduits: any) {
    this.formProduitIsSubmit = true;
    this.listeProduits = listeproduits[0]
    this.facture.clientId = this.clientId;
    this.facture.totalHT = listeproduits[1]
    this.facture.totalTVA = listeproduits[2]
  }


  save() {
    this.loading = true;
    this.error = '';
    this.result = null;

    this.devisService.create(this.facture)
      .subscribe({
          next: (data: any) => {
          if (data["id"] != 0) {
            for (let prod of this.listeProduits)
              prod.factureId = data["id"];

            this.produitService.create(this.listeProduits).subscribe(
              (data1) => {
                this.resultat = data1.message
                this.loading = false;
                setTimeout(() => {
                  document.location.href = 'facture/devis/' + data["id"]
                }, 2000)
              })
          }
        }
        ,
        error: (err) => {
          this.error = 'Erreur lors de la requête POST';
          this.loading = false;
        }}
      )
  }

  openCreateForm() {
    this.clientchoix = "create"
  }

  openSelectForm() {
    this.clientchoix = "select"
  }


}

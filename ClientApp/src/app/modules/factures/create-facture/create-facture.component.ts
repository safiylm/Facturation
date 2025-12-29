import { Component, OnInit } from '@angular/core';
import { FactureService } from '../../../core/facture-service';
import { ProduitService } from '../../../core/produit-service';

@Component({
  selector: 'app-create-facture',
  templateUrl: './create-facture.component.html',
  styleUrls: ['./create-facture.component.css']
})
export class CreateFactureComponent implements OnInit {

  constructor(
    private factureService: FactureService,
    private produitService: ProduitService) { }

  listeProduits !: any;
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
    status: "En Attente",
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

    this.factureService.create(this.facture)
      .subscribe({
          next: (data: any) => {
          if (data["id"] != 0) {
            for (let prod of this.listeProduits)
              prod.factureId = data["id"];

            this.produitService.create(this.listeProduits).subscribe(
              (data1) => {
                  this.loading = false;
                this.result = data1.message
                setTimeout(() => {
                  document.location.href = 'facture/' + data["id"]
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

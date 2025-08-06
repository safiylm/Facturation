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
    private factureService: FactureService, private produitService: ProduitService) { }
  listeProduits !: any;
  resultat=""
  clientchoix ="select"
  clientId = 0
  formProduitIsSubmit = false;

  ngOnInit(): void {
  }

  getClientId(newItem: number) {
    this.clientId = newItem
  }

  facture = {
    clientId: this.clientId,
    userId: 1,
    titre: 'Facture ',
    totalTVA: 0,
    totalHT: 0,
    informations: "",
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
    this.factureService.create(this.facture)
      .subscribe(
        (data) => {
           let  jsonObj = JSON.parse(data); // string to "any" object first
          console.log(jsonObj["id"])
          for (let prod of this.listeProduits)
          prod.factureId = jsonObj["id"];

          this.produitService.create(this.listeProduits).subscribe(
              (data1) => {
              console.log(data1)
              this.resultat= data1
              })
          
        }
      )
   
  }

  openCreateForm() {
    this.clientchoix = "create"
  }

  openSelectForm() {
    this.clientchoix = "select"
  }

}

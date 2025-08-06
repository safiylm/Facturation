import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FactureService } from '../../../core/facture-service';
import { ProduitService } from '../../../core/produit-service';
import { Produit } from '../../../models/produit.model';

@Component({
  selector: 'app-gestion-produits',
  templateUrl: './gestion-produits.component.html',
  styleUrls: ['./gestion-produits.component.css']
})
export class GestionProduitsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private produitService: ProduitService,
    private factureService: FactureService) { }

  @Output() createFactureEvent = new EventEmitter<any>();

 // liste: any[] = [];
  liste !: Produit[];
  id !: number;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')!);

    this.produitService.getProduitFactureById(this.id).subscribe(
      (data) => {
        this.liste = data;
        console.log(this.liste)
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

  facture = {
    clientId:2, 
    userId: 1,
    titre: 'Iphone 16',
    totalTVA: 900,
    totalHT: 99,
    informations: "vgbhnjk,;",
    createdAt: new Date()

  };

  add(produit: any) {
    this.liste.push(produit)
  }


  edit(i: number, prod: any) {
    this.liste[i] = prod
  }



  save() {
    this.createFactureEvent.emit("this.liste")
 /*

    this.factureService.create(this.facture)
      .subscribe(
        (data) => {
           let  jsonObj = JSON.parse(data); // string to "any" object first
          console.log(jsonObj["id"])
          this.produit.factureId = jsonObj["id"];
          this.produitService.create(this.liste).subscribe(
              (data1) => {
                console.log(data1)
              })
        }
      )
   */
  }

}

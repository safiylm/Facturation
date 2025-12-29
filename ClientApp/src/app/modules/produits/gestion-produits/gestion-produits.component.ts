import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produit } from '../../../models/produit.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from 'src/app/core/produit-service';

@Component({
  selector: 'app-gestion-produits',
  templateUrl: './gestion-produits.component.html',
  styleUrls: ['./gestion-produits.component.css']
})
export class GestionProduitsComponent implements OnInit {

 
 
   constructor(private route: ActivatedRoute,
     private produitService: ProduitService,
     private router: Router) { }
 
   @Output() getProductsEvent = new EventEmitter<any>();
   liste: Produit[] = [];
   id !: number;
   totalHT = 0;
   totalTVA = 0;
  
 
 
   ngOnInit() {
     if (this.router.url.includes('facture/edit')) {
 
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
     
     const saved = sessionStorage.getItem('produitsoffactureedited');
     if (saved) {
       this.liste = JSON.parse(saved[0]);
       this.totalHT = JSON.parse(saved[1]);
       this.totalTVA = JSON.parse(saved[1]);
       console.log(localStorage.getItem("produitsoffactureedited"))
     }
   }
 
   add(produit: any) {
     if (produit.designation != '' && produit.prixUnitaireHT != 0 && produit.tva != 0) {
       this.liste.push(produit)
       this.totalTVA = this.totalTVA + produit.tva * 0.01 * produit.quantite * produit.prixUnitaireHT
       this.totalHT = this.totalHT + produit.prixUnitaireHT * produit.quantite
       sessionStorage.setItem("produitsoffactureedited", JSON.stringify([this.liste, this.totalHT, this.totalTVA]))
     }
   }
 
 
   edit(i: number, prod: any) {
     this.liste[i] = prod
 
     this.totalHT = 0;
     this.totalTVA = 0
     for (let prod of this.liste) {
       this.totalTVA = this.totalTVA + prod.tva * 0.01 * prod.quantite * prod.prixUnitaireHT
       this.totalHT = this.totalHT + prod.prixUnitaireHT * prod.quantite
     }
     sessionStorage.setItem("produitsoffactureedited", JSON.stringify([this.liste, this.totalHT, this.totalTVA]))
 
   }
 
 
 
   save() {
     sessionStorage.setItem("produitsoffactureedited", JSON.stringify([this.liste, this.totalHT, this.totalTVA]))
     this.getProductsEvent.emit([this.liste, this.totalHT, this.totalTVA]);
   }
 
 }
 
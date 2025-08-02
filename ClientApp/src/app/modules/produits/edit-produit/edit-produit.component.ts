import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produit } from '../../../models/produit.model';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {

  @Input() produit!: Produit;
  @Input() index!: number;
  openEditForm_ = false;

  constructor() { }


  ngOnInit(): void {
   // this.produitCopy = { ...this.produit }; // shallow copy
  }

  openEditForm() {
    this.openEditForm_ = !this.openEditForm_;
  }

  @Output() editProduitEvent = new EventEmitter< any>();


  edit() {
   // this.produit.id = this.index;
    const produitClone = { ...this.produit }; // éviter de partager la même instance

    this.editProduitEvent.emit(produitClone);

  }

}

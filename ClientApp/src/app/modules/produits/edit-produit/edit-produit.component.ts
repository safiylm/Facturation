import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produit } from '../../../models/produit.model';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent {

  @Input() produit!: Produit;
  @Input() index!: number;
  openEditForm_ = false;
  @Output() editProduitEvent = new EventEmitter< any>();


  openEditForm() {
    this.openEditForm_ = !this.openEditForm_;
  }

  
  edit() {
    const produitClone = { ...this.produit }; // éviter de partager la même instance
    this.editProduitEvent.emit(produitClone);
  }

}

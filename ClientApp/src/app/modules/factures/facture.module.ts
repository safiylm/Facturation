import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { CreateFactureComponent } from './create-facture/create-facture.component';
import { EditFacturesComponent } from './edit-factures/edit-factures.component';
import { ApercuFacturesComponent } from './apercu-factures/apercu-factures.component';
import { AuthGuard } from '../../auth/auth.guard';
import { DetailClientComponent } from '../clients/detail-client/detail-client.component';
import { ListeProduitsComponent } from '../produits/liste-produits/liste-produits.component';
import { EditProduitComponent } from '../produits/edit-produit/edit-produit.component';
import { CreateProduitComponent } from '../produits/create-produit/create-produit.component';
import { SelectClientComponent } from '../clients/select-client/select-client.component';
import { GestionProduitsComponent } from '../produits/gestion-produits/gestion-produits.component';
import { NomClientComponent } from '../clients/nom-client/nom-client.component';
import { GestionProduitsInCreationFactureComponent } from '../produits/gestion-produits-in-creation-facture/gestion-produits-in-creation-facture.component';
import { GestionProduitsInEditFactureComponent } from '../produits/gestion-produits-in-edit-facture/gestion-produits-in-edit-facture.component';
import { CreateClientComponent } from '../clients/create-client/create-client.component';

const routes: Routes = [
  {
    path: 'new-facture', component: CreateFactureComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-facture/:id', component: EditFacturesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'facture/:id', component: ApercuFacturesComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    ApercuFacturesComponent, EditFacturesComponent, CreateFactureComponent,
    DetailClientComponent, ListeProduitsComponent,

    EditProduitComponent,
    CreateProduitComponent,

    SelectClientComponent,
    CreateClientComponent,


    GestionProduitsComponent,
    NomClientComponent,
    GestionProduitsInCreationFactureComponent,
    GestionProduitsInEditFactureComponent, 
  ],
  imports: [
  
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class FactureModule { }

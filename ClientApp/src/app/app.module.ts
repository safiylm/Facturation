import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { HomeComponent } from './modules/home/home.component';
import { CounterComponent } from './modules/counter/counter.component';
import { FetchDataComponent } from './modules/fetch-data/fetch-data.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CommonModule } from '@angular/common';
import { CreateClientComponent } from './modules/clients/create-client/create-client.component';
import { EditClientComponent } from './modules/clients/edit-client/edit-client.component';
import { EditUserComponent } from './modules/user/edit-user/edit-user.component';
import { ListeFacturesComponent } from './modules/factures/liste-factures/liste-factures.component';
import { CreateFactureComponent } from './modules/factures/create-facture/create-facture.component';
import { ListeClientsComponent } from './modules/clients/liste-clients/liste-clients.component';
import { SelectClientComponent } from './modules/clients/select-client/select-client.component';
import { DetailClientComponent } from './modules/clients/detail-client/detail-client.component';
import { EditProduitComponent } from './modules/produits/edit-produit/edit-produit.component';
import { CreateProduitComponent } from './modules/produits/create-produit/create-produit.component';
import { GestionProduitsComponent } from './modules/produits/gestion-produits/gestion-produits.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditFacturesComponent } from './modules/factures/edit-factures/edit-factures.component';
import { ApercuFacturesComponent } from './modules/factures/apercu-factures/apercu-factures.component';
import { NomClientComponent } from './modules/clients/nom-client/nom-client.component';
import { ListeProduitsComponent } from './modules/produits/liste-produits/liste-produits.component';
import { GestionProduitsInCreationFactureComponent } from './modules/produits/gestion-produits-in-creation-facture/gestion-produits-in-creation-facture.component';
import { GestionProduitsInEditFactureComponent } from './modules/produits/gestion-produits-in-edit-facture/gestion-produits-in-edit-facture.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    RegisterComponent, LoginComponent,
    CreateClientComponent, EditClientComponent,
    EditUserComponent, ListeFacturesComponent, CreateFactureComponent,
    ListeClientsComponent, SelectClientComponent,
    DetailClientComponent, EditProduitComponent, CreateProduitComponent
,GestionProduitsComponent, EditFacturesComponent, ApercuFacturesComponent, 
NomClientComponent, ListeProduitsComponent , GestionProduitsInCreationFactureComponent,
GestionProduitsInEditFactureComponent ],
  imports: [
    BrowserModule, //.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule, BrowserAnimationsModule ,
    FormsModule,
   CommonModule, /* necessaire for ngModel */
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'new-client', component: CreateClientComponent },
      { path: 'edit-client/:id', component: EditClientComponent },
      { path: 'edit-user/:id', component: EditUserComponent },
      { path: 'new-facture', component: CreateFactureComponent },
      { path: 'edit-facture/:id', component: EditFacturesComponent },
      { path: 'facture/:id', component: ApercuFacturesComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../../auth/auth.guard';
import { CreateClientComponent } from '../clients/create-client/create-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';

const routes: Routes = [
  //{
  //  path: 'new', component: CreateClientComponent,
  //  canActivate: [AuthGuard],
  //},

  {
    path: 'edit/:id', component: EditClientComponent,
    canActivate: [AuthGuard],
  },

];

@NgModule({
  declarations: [
    EditClientComponent,
   // CreateClientComponent
  ],
  imports: [
  
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ClientModule { }

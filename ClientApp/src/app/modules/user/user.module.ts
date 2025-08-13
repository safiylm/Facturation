import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../../auth/auth.guard';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {
    path: 'edit', component: EditUserComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    EditUserComponent
  ],
  imports: [
  
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class UserModule { }

import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { HomeComponent } from './modules/home/home.component';
import { CounterComponent } from './modules/counter/counter.component';
import { CommonModule } from '@angular/common';
import { ListeFacturesComponent } from './modules/factures/liste-factures/liste-factures.component';
import { ListeClientsComponent } from './modules/clients/liste-clients/liste-clients.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,


    ListeFacturesComponent, 
    ListeClientsComponent,
  DashboardComponent

  ],
  imports: [
    BrowserModule, //.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule, BrowserAnimationsModule ,
    FormsModule,
   CommonModule, /* necessaire for ngModel */
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },

      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },

      {
        path: 'client',
        loadChildren: () => import('./modules/clients/client.module').then(m => m.ClientModule)
      },

      {
        path: 'user',
        loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
      },
      {
        path: '',
        loadChildren: () => import('./modules/factures/facture.module').then(m => m.FactureModule)
      },

    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

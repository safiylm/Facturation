import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [AppModule, ServerModule, FormsModule,
    CommonModule, /* necessaire for ngModel */  ModuleMapLoaderModule],
    bootstrap: [AppComponent]
})
export class AppServerModule { }

import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [AppModule, ServerModule, FormsModule,
    CommonModule,],
    bootstrap: [AppComponent]
})
export class AppServerModule { }

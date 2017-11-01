import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

// botstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PanelModule } from './panel/panel.modules';
import { DetalleModule } from './detalle/detalle.module';
import { ContactoModule } from './contacto/contacto.modules';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    NgbModule,
    RouterModule,
    PanelModule,
    DetalleModule,
    ContactoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

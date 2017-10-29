import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

// botstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PanelModule } from './panel/panel.modules';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    NgbModule,
    RouterModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

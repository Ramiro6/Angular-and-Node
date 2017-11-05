import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DetalleComponent } from './detalle.component';

const routes: Routes = [
    { path: 'detalle/:id', component: DetalleComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes),
    ],
    declarations: [
        DetalleComponent
    ],
    providers: [],
})

export class DetalleModule { }

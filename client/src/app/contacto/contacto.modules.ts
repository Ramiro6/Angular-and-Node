import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// components
import { ContactoComponent } from './contacto.component';


const routes: Routes = [
    { path: 'contacto', component: ContactoComponent }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        CommonModule
    ],
    declarations: [
        ContactoComponent
    ],
    providers: [],
})


export class ContactoModule { }

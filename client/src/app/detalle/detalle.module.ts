import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleComponent } from './detalle.component';

const routes: Routes = [
    { path: 'detalle/:id', component: DetalleComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    declarations: [
        DetalleComponent
    ],
    providers: [],
})

export class DetalleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// componenets
import { PanelComponent } from './panel.component';

const routers: Routes = [
    { path: '', component: PanelComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routers)
    ],
    declarations: [
        PanelComponent
    ],
    providers: [/* TODO: Providers go here */],
})

export class PanelModule { }

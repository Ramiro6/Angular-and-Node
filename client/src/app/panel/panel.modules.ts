import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// maps
import { AgmCoreModule } from '@agm/core';

// botstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// componenets
import { PanelComponent } from './panel.component';

const routers: Routes = [
    { path: '', component: PanelComponent }
];

@NgModule({
    imports: [
        NgbModule.forRoot(),
        CommonModule,
        RouterModule.forRoot(routers),
        AgmCoreModule.forRoot({
            apiKey: 'your key'
          })
    ],
    declarations: [
        PanelComponent
    ],
    providers: [/* TODO: Providers go here */],
})

export class PanelModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// maps
import { AgmCoreModule } from '@agm/core';

// botstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// componenets
import { ColorClickDirective } from './directives/colorclick.directive';
import { SaveClicksDirective } from './directives/save-clicks.directive';
import { PanelComponent } from './panel.component';
import { WidthDirective } from './directives/width.directive';
import { MapsComponent } from './componets/maps/maps.component';

const routers: Routes = [
    { path: '', component: PanelComponent }
];

@NgModule({
    imports: [
        NgbModule.forRoot(),
        CommonModule,
        RouterModule.forRoot(routers),
        AgmCoreModule.forRoot({
            apiKey: 'api key'
          })
    ],
    declarations: [
        WidthDirective,
        ColorClickDirective,
        SaveClicksDirective,
        PanelComponent,
        MapsComponent
    ],
    providers: [/* TODO: Providers go here */],
})

export class PanelModule { }

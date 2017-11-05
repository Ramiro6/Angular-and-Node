import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
import { NewBusinessComponent } from './componets/new-business/new-business.component';
import { maps } from '../../environments/apike';

const routers: Routes = [
    { path: '', component: PanelComponent },
    { path: 'new', component: NewBusinessComponent }
];

@NgModule({
    imports: [
        FormsModule,
        NgbModule.forRoot(),
        CommonModule,
        RouterModule.forRoot(routers),
        AgmCoreModule.forRoot({
            apiKey: maps.key
          })
    ],
    declarations: [
        WidthDirective,
        ColorClickDirective,
        SaveClicksDirective,
        PanelComponent,
        MapsComponent,
        NewBusinessComponent
    ],
    providers: [/* TODO: Providers go here */],
})

export class PanelModule { }

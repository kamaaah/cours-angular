import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculeRoutingModule } from './vehicule-routing.module';
import { CamionComponent } from './camion/camion.component';
import { VoitureComponent } from './voiture/voiture.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CamionComponent, VoitureComponent],
  imports: [
    CommonModule,
    VehiculeRoutingModule,
    FormsModule
  ]
})
export class VehiculeModule { }

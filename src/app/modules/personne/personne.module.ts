import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonneRoutingModule } from './personne-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { PersonnesListComponent } from './personnes-list/personnes-list.component';
import { UpdatePersonneComponent } from './update-personne/update-personne.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [PersonnesListComponent, UpdatePersonneComponent, DetailComponent],
  imports: [CommonModule, FormsModule, PersonneRoutingModule, HttpClientModule],
})
export class PersonneModule {}

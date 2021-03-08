import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdresseComponent } from './composants/directives/adresse/adresse.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { HomeComponent } from './composants/directives/home/home.component';
import { ErrorComponent } from './composants/directives/error/error.component';
import { TemplateformComponent } from './Formulaires/templateform/templateform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatriceComponent } from './composants/directives/calculatrice/calculatrice.component';
import { ReactiveFormComponent } from './Formulaires/reactive-form/reactive-form.component';
import { TpComponent } from './tp/tp/tp.component';

import { TpCorrectionComponent } from './tp/tp-correction/tp-correction.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { DragdropComponent } from './composants/materials/dragdrop/dragdrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DashboardComponent } from './composants/materials/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NavigationComponent } from './composants/materials/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { VehiculeModule } from './modules/vehicule/vehicule.module';
import { GetCharPipe } from './pipes/get-char.pipe';
import { GetPersonArrayObjectPipe } from './pipes/get-person-array-object.pipe';
import { PersonneModule } from './modules/personne/personne.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './composants/auth/auth.component';
import { NgxBootstrapModule } from './ngx-bootstrap.module';
import { PereComponent } from './composants/interactions/pere/pere.component';
import { FilsComponent } from './composants/interactions/fils/fils.component';
import { ChildComponent } from './composants/interactions/child/child.component';
import { ParentComponent } from './composants/interactions/parent/parent.component';
import { DeveloperComponent } from './composants/interactions/exercice/developer/developer.component';
import { SkillComponent } from './composants/interactions/exercice/skill/skill.component';
import { ObservableComponent } from './composants/rxjs/observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    AdresseComponent,
    StagiaireComponent,
    HomeComponent,
    ErrorComponent,
    TemplateformComponent,
    CalculatriceComponent,
    ReactiveFormComponent,
    TpComponent,
    TpCorrectionComponent,
    DragdropComponent,
    DashboardComponent,
    TableComponent,
    NavigationComponent,
    GetCharPipe,
    GetPersonArrayObjectPipe,
    AuthComponent,
    PereComponent,
    FilsComponent,
    ChildComponent,
    ParentComponent,
    DeveloperComponent,
    SkillComponent,
    ObservableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBootstrapModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    VehiculeModule,
    PersonneModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatriceComponent } from './composants/directives/calculatrice/calculatrice.component';
import { AdresseComponent } from './composants/directives/adresse/adresse.component';
import { ErrorComponent } from './composants/directives/error/error.component';
import { HomeComponent } from './composants/directives/home/home.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { TemplateformComponent } from './Formulaires/templateform/templateform.component';
import { ReactiveFormComponent } from './Formulaires/reactive-form/reactive-form.component';
import { TpComponent } from './tp/tp/tp.component';
import { TpCorrectionComponent } from './tp/tp-correction/tp-correction.component';
import { TableComponent } from './table/table.component';
import { NavigationComponent } from './composants/materials/navigation/navigation.component';
import { DashboardComponent } from './composants/materials/dashboard/dashboard.component';
import { DragdropComponent } from './composants/materials/dragdrop/dragdrop.component';
import { AuthComponent } from './composants/auth/auth.component';
import { AuthGuard } from './guards/auth.guard';
import { LeaveGuard } from './guards/leave.guard';
import { PereComponent } from './composants/interactions/pere/pere.component';
import { FilsComponent } from './composants/interactions/fils/fils.component';
import { ChildComponent } from './composants/interactions/child/child.component';
import { ParentComponent } from './composants/interactions/parent/parent.component';
import { DeveloperComponent } from './composants/interactions/exercice/developer/developer.component';
import { SkillComponent } from './composants/interactions/exercice/skill/skill.component';
import { ObservableComponent } from './composants/rxjs/observable/observable.component';

/*  Déclaration d'un tableau de routes appelé dans le module principal */
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'stagiaire', component: StagiaireComponent },
  { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent },
  { path: 'adresse', component: AdresseComponent, canActivate: [AuthGuard] },
  { path: 'auth', component: AuthComponent },

  { path: 'calculatrice', component: CalculatriceComponent },
  { path: 'error', component: ErrorComponent },

  {
    path: 'template-form',
    component: TemplateformComponent,
    canDeactivate: [LeaveGuard],
  },
  { path: 'reactive-form', component: ReactiveFormComponent },

  { path: 'table', component: TableComponent },

  { path: 'tp', component: TpComponent },
  { path: 'tp-correction', component: TpCorrectionComponent },

  { path: 'navigation', component: NavigationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dragdrop', component: DragdropComponent },
  { path: 'pere', component: PereComponent },
  { path: 'fils', component: FilsComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path:'developer', component: DeveloperComponent},
  { path:'skill', component: SkillComponent},
  { path: 'observable', component: ObservableComponent},

  {
    path: 'voiture',
    loadChildren: './modules/vehicule/vehicule.module#VehiculeModule',
  },
  {
    path: 'personne',
    loadChildren: './modules/personne/personne.module#PersonneModule',
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})

/* ce Fichier permet d'assurer le mapping chemin/composant */
export class AppRoutingModule {}

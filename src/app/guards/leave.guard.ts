import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { TemplateformComponent } from '../Formulaires/templateform/templateform.component';

@Injectable({
  providedIn: 'root',
})
export class LeaveGuard implements CanDeactivate<TemplateformComponent> {
  canDeactivate(
    component: TemplateformComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    return (
      component.personne.nom === undefined ||
      component.personne.prenom === undefined ||
      component.personne.nom.length === 0 ||
      component.personne.prenom.length === 0 ||
      confirm('Voulez-vous vraiement quitter ce formulaire ? ')
    );
  }
}

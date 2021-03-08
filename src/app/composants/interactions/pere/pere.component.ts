import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FilsComponent } from '../fils/fils.component';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css'],
})
export class PereComponent implements OnInit, AfterViewInit {
  /*  Le décorateur @ViewChild permet a un composant parent de récupérer des données de son composant enfant */
  @ViewChild(FilsComponent, { static: false }) fils!: FilsComponent;
  /*  Le décorateur @ViewChildren permet a un composant parent de récupérer  toutes les données de ses composants enfants */
  @ViewChildren(FilsComponent) filston!: QueryList<FilsComponent>;
  tab: Array<string> = ['premier', 'deuxieme', 'troisieme'];
  nord = 'Lille';
  sud = 'Nord';
  capitale = 'Paris';

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // Affiche premier en console
    console.log(this.fils.ordre);

    this.filston.forEach((elt) => console.log(elt));
  }
}

import { Component, OnInit, Pipe, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Personne } from 'src/app/classes/personne';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  modalRef!: BsModalRef;

  person: any = {
    nom: 'john',
    prenom: 'pat',
  };

  title = 'angular-front';

  nom = 'Doe';

  couleur = 'blue';

  constructor( public modalService: BsModalService) {}

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  libelleFormation = 'POEC FRONT';
  personne: Personne = new Personne(100, 'Wick', 'John');
  tab: number[] = [2, 1, 6, 5, 11, 14, 18];

  personnes: Array<Personne> = [
    new Personne(100, 'Wick', 'John'),
    new Personne(101, 'Walte', 'harry'),
    new Personne(102, 'Flash', 'Gordon'),
    new Personne(103, 'Allen', 'Barry'),
    new Personne(104, 'Parker', 'Peter'),
  ];

  direBonjour() {
    return 'Bonjour Angular';
  }
  getColor() {
    return 'white';
  }
  getBackgroundColor() {
    return ' red';
  }

  addPerson(nom: string, prenom: string) {
    nom = nom.trim();
    prenom = prenom.trim();
    if (!nom || prenom) {
      return;
    }
    const man = { nom, prenom };
    this.person.push(man);
  }

  ngOnInit(): void {}
}

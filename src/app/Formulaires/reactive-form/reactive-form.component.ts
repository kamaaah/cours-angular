import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {


  /*
  Utilisation de la classe Angular FormControl
  nous permettant d'associer un attribut ici nom
  à un champ de formulaire défini dans le .html
  afin de faciliter le binding et controle, validation
   */
  // nom = new FormControl('Wick');

  /* FormGroup(Classe Angular) ==> Composé de plusieurs objets
   de type FormControl
   */
  /* personneForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nom: new FormControl('', [Validators.required, this.checkInputValidator]),
    prenom: new FormControl('',[Validators.required, this.checkInputValidator]),
    adresse: new FormGroup({
      rue:new FormControl(''),
      ville: new FormControl(''),
      codePostal: new FormControl('')

    })
  }) */
  personnes: any = [];
  personneForm = this.fb.group({
    id: [null, [Validators.required]],
    nom: ['', [Validators.required, this.checkInputValidator]],
    prenom: ['', [Validators.required, this.checkInputValidator]],
    adresse: this.fb.group({
      rue: [''],
      ville: [''],
      codePostal: [''],
    }),
    sports: this.fb.array([
      /* this.fb.control('') */
    ]),
  });

  checkInputValidator(control: FormControl) {
    const str: string = control.value;
    if (str[0] >= 'A' && str[0] <= 'Z') {
      return null;
    } else {
      return { erreur: 'Entrée non valide' };
    }
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    /** la méthode setValue() permet d'initialiser; ou modifier les
     *  valeurs de formulaire: il faut préceiser une valeur pour chaque
     *  FormControl du FormGroup
     */
    // this.personneForm.setValue({ nom: 'Whales', prenom: 'Harry', id: 1 });
  }

  /**
   * La méthode patchValue() permet d'initialiser, ou modifier
   */

  afficherTout() {
    this.personnes.push({ ...this.personneForm.value });
    // console.log(this.personneForm.value);
    // console.log(this.personneForm.controls.nom);
    // console.log(this.personneForm.get('nom'));
    this.personneForm.reset();
  }

  get id() {
    return this.personneForm.get('id');
  }

  get Nom() {
    return this.personneForm.get('nom');
  }
  get Prenom() {
    return this.personneForm.get('prenom');
  }

  get sports() {
    return this.personneForm.get('sports') as FormArray;
  }
  ajouterSport() {
    this.sports.push(this.fb.control(''));
  }

  supprimerSport(i: number) {
    this.sports.removeAt(i);
  }
  // afficherNom(){
  //   console.log(this.nom.value);
  // }
}

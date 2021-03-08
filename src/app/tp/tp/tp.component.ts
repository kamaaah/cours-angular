import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-tp',
  templateUrl: './tp.component.html',
  styleUrls: ['./tp.component.css'],
})
export class TpComponent implements OnInit {
  /*   Dans un nouveau composant, creer un formulaire qui permet `a
  une personne de saisir son nom, son prenom ainsi qu’un tableau
  de commentaire de taille variable.
  Chaque commentaire est compose d’un titre, un contenu et une
  categorie.
  En cliquant sur Ajouter, les donnees saisies sont affichees en
  bas du formulaire et le formulaire est vide.
  Aucun champ ne doit etre vide a l’ajout, les nom et prenom
  doivent commencer par une lettre majuscule. */

  peoples: any = [];

  peopleForm = this.fb.group({
    id: [null, [Validators.required]],
    lastName: ['', [Validators.required, this.checkValidator]],
    firstName: ['', [Validators.required, this.checkValidator]],
    comments: this.fb.array([]),
  });
  constructor(private fb: FormBuilder) {}

  createItem(): FormGroup {
    return this.fb.group({
      title:['', ],
      comment:['', ],
      category: ['', ],
    });
  }
  get comments() {
    return this.peopleForm.get('comments') as FormArray;
  }

  addCommentsGroup() {
    // this.peopleForm.get('comments') as FormArray;
    this.comments.push(this.createItem());
  }

   deleteComments(i: number) {
    // const add = this.peopleForm.get('comments') as FormArray;
    this.comments.removeAt(i);
  }

  /*   1er Version  de fonction de validation */
  /* checkInputValidator(control: FormControl) {
    const str: string = control.value;
    if (str[0] >= 'A' && str[0] <= 'Z') {
      return null;
    } else {
      return { error: 'Entrée non valide' };
    }
  } */

  /*  2ème Version de fonction de Validation */

  checkValidator(control: FormControl){
    let str: string = control.value;
    let regex = /^[A-Z].*$/
    if (regex.test(str)){
      return null;
    } else {
      return { error: 'non valide'};
    }
  }

  get id() {
    return this.peopleForm.get('id');
  }

  get firstName() {
    return this.peopleForm.get('firstName');
  }

  get lastName() {
    return this.peopleForm.get('lastName');
  }

  ngOnInit(): void {
    // this.peopleForm.reset();
  }
  showall() {
    this.peoples.push({ ...this.peopleForm.value });
    console.log(this.peopleForm.value);
    this.peopleForm.reset();
  }



}



  /*  addCommentsGroup() {
    const add = this.peopleForm.get('comments') as FormArray;
    add.push(
      this.fb.group({
        title: ['', [Validators.required, this.checkInputValidator]],
        comment: ['', [Validators.required, this.checkInputValidator]],
        category: ['', [Validators.required, this.checkInputValidator]],
      })
    );
    // this.comments.push(this.fb.control(''));
    return add;
  } */


  /* addCommentsGroup(){
    this.comments.push(this.fb.control(''));
    console.log();
  } */





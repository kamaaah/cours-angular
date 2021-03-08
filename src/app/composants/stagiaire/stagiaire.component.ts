import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css'],
})
export class StagiaireComponent implements OnInit {
  nom: any;
  prenom: any;

  /**
   * Fonction Javascript qui sert a initialiser les attributs de la classes
   * Constructor avec Angular sert seulement à faire des injections de dépendances
   */
  constructor(private route: ActivatedRoute) {}

  /**
   * Méhtode qui sera executée quand Angular aura fini
   * d'initialiser le composant
   */

  ngOnInit(): void {
    // http:localhost:4200/stagiaire/Harry/Osborn
    /* this.nom =this.route.snapshot.params.nom;
    this.prenom = this.route.snapshot.params.prenom;
    console.log(this.nom + ' ' + this.prenom);
 */

    /**
     * Récupère les paramètres par l'intermédiaire d'un objet paramMap
     *   Solution avec les Observables(asynchrone)
     */
    /**
     * Concept
     */
    // http://localhost:4200/stagiaire/Harry/Osborn
    this.route.paramMap.subscribe((res) => {
      this.nom = res.get('nom');
      this.prenom = res.get('prenom');
      console.log(this.nom + '' + this.prenom);
    });

    // http:localhost:4200/stagiaire?nom=Wick&prenom=John
    /* this.nom = this.route.snapshot.queryParams.nom;
    this.prenom = this.route.snapshot.queryParams.prenom;
    console.log(this.nom + ' ' + this.prenom); */

    // http:localhost:4200/stagiaire?nom=Wick&prenom=John
    /*  this.route.queryParamMap.subscribe(res =>{
      this.nom = res.get('nom');
      this.prenom =res.get('prenom');
      console.log(this.nom, this.prenom);
    }); */
  }
}

/* 2 formes de paramètre de requetes

  chemin/nom/prenom
  chemin?nom=Wick&prenom=John

  2 manières différentes de récupérer les valeurs respectives
  paramMap pour /chemin/prenom

  queryParamMap pour /chemin=Wick&prenom=John



*/

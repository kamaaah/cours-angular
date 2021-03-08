/* Le 18/02/2021 */

/* **** class PersonneDetailsComponent **** */
/*
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/shared/personne.service';
@Component({
  selector: 'app-personne-details',
  templateUrl: './personne-details.component.html',
  styleUrls: ['./personne-details.component.css']
})
export class PersonneDetailsComponent implements OnInit {
  id!: number;
  personne!: Personne;
  constructor(private route: ActivatedRoute,private router: Router,private personneService: PersonneService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personneService.getP(this.id)
      .subscribe(data => {
        console.log(data)
        this.personne = data;
      });
  }
  ************ END ****************** */

/* ****** Class PersonService **** ***********/

/**
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../interfaces/personne';
@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  url: string = 'http://localhost:5555/personnes/'
  personnes: Array<Personne> = new Array<Personne>();
  constructor(private http: HttpClient) {
    this.personnes.push({ nom: 'wick', prenom: 'john' });
    this.personnes.push({ nom: 'green', prenom: 'bob' });
  }
  // Recupère la liste de personnes
  getAllPersons() {
    return this.http.get<Array<Personne>>(this.url);
  }
  addP(p:Personne){
    return this.http.post(this.url, p);
  }
  getAll() {
    return this.personnes;
  }
  addPerson(p: Personne) {
    this.personnes.push(p);
  }
}
  ************ END ****************** */

/* ****** Class PersonneListComponent **** ***********/
/**
   *
  import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/shared/personne.service';
@Component({
  selector: 'app-personnes-list',
  templateUrl: './personnes-list.component.html',
  styleUrls: ['./personnes-list.component.css']
})
export class PersonnesListComponent implements OnInit {
  personne: Personne =  {};
  personnes: Array <Personne> = new Array <Personne>();
  constructor(private personneService: PersonneService) { }
  ngOnInit(): void {
    // this.personnes = this.personneService.getAll();
    this.reloadData();
  }
  reloadData(){
    this.personneService.getAllPersons().subscribe(res =>{
      this.personnes = res;
    })
  }
  savePerson(){
    this.personneService.addP(this.personne).subscribe(res =>{
      console.log(res);
    })
  }
}

*/

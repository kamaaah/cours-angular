import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../interfaces/personne';

@Injectable({
  providedIn: 'root',
})
export class PersonneService {
  /* const headers = new HttpHeaders()
   .set('content-type', 'application/json')
   .set('Acess-Control-Allow-Origin','*'); */
  url: string = 'http://localhost:5555/personnes/';

  personnes: Array<Personne> = new Array<Personne>();

  constructor(private http: HttpClient) {
    this.personnes.push({ nom: 'wick', prenom: 'John' });
    this.personnes.push({ nom: 'Harry', prenom: 'Potter' });
    this.personnes.push({ nom: 'Allen', prenom: 'Barry' });
  }

  /* getAll() {
    return this.personnes;
  }

  addPerson(p: Personne) {
    this.personnes.push(p);
  } */
  getAllPersons() {
    return this.http.get<Array<Personne>>(this.url);
  }

  addP(p: Personne) {
    return this.http.post(this.url, p);
  }
  
  updateP(id: number, p: Personne) {
    console.log(id, p);
    return this.http.put(this.url + id, p);
  }

  deleteP(id: number) {
    return this.http.delete(this.url + id);
  }

  getP(id: number) {
    return this.http.get(this.url + id);
  }

  getDetailP(id: number, p: Personne) {
    return this.http.put(this.url + id, p);
  }
}

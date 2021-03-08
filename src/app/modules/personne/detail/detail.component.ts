import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  /* id!: number;
  personne!: Personne;

  constructor(
    private personneService: PersonneService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.personneService.getP(this.id).subscribe((item) => {
      console.log(item);
      this.personne = item;
    });
  }
} */

  id!: number;
  personne!: Personne;
  constructor(
    private route: ActivatedRoute,
    private personneService: PersonneService
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personneService.getP(this.id).subscribe((data) => {
      console.log(data);
      this.personne = data;
    });
  }
}

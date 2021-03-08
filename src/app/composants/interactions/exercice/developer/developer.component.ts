import { Component, OnInit } from '@angular/core';
import { Developer } from '../classe/developer';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent implements OnInit {
  developer!: Developer;

  constructor() {
    this.developer = new Developer();
    this.developer.lastName = 'Allen';
    this.developer.firstName = 'Barry';
    this.developer.age = 25;
    this.developer.sexe = 'Homme';
    this.developer.bio =
      "IL court à la vitesse de l'éclair et neutralise les superméchants";
    this.developer.skills = [
      {
        name: 'Sa vitesse',
        logo: '../../../../assets/utilities/flash4.jpeg',
        site:
          'https://www.google.fr/imgres?imgurl=http%3A%2F%2Fwww.comicsblog.fr%2Fimages%2Fnews%2Fcrop2_theflas-decalage1.jpg&imgrefurl=http%3A%2F%2Fwww.comicsblog.fr%2F38037-The_Flash_saison_6__le_final_lui_aussi_deecalee_e_cause_du_coronavirus&tbnid=2NBeZ2JsILXFbM&vet=12ahUKEwjm7cS6yIDvAhUQwIUKHWDTAa0QMygKegUIARC7AQ..i&docid=JYFXUqZmNZ7gKM&w=1000&h=378&q=flash&ved=2ahUKEwjm7cS6yIDvAhUQwIUKHWDTAa0QMygKegUIARC7AQ',
      },
      {
        name: 'Super enqueteur',
        logo: '../../../../assets/utilities/flash6.jpeg',
        site:
          'https://www.cineserie.com/news/series/the-flash-saison-6-le-cliffhanger-avec-spoiler-naura-pas-lieu-3397264/',
      },
      {
        name: 'Police Scientifique',
        logo: '../../../../assets/utilities/flash9.jpeg',
        site:
          'https://www.critictoo.com/critiques-serie-tv/the-flash-saison-5-episode-22/',
      },
    ];
  }

  ngOnInit(): void {}
}

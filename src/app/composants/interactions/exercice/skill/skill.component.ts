import { Component, Input, OnInit } from '@angular/core';

import { Skill } from '../classe/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit {
  @Input() skill!: Skill;

  constructor() {}

  ngOnInit(): void {}
}

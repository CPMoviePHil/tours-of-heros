import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROS } from '../mock-hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  selectedHero: Hero;
  hero_list = HEROS;
  constructor() { }

  ngOnInit(): void {
    //this.hero = 'GigiTsaDa';
  }
  onSelect(hero): void{
    this.selectedHero = hero;
  }

}

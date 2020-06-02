import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  selectedHero: Hero;
  hero_list: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    //this.hero_list = this.heroService.getHeros();
    //this.hero = 'GigiTsaDa';
    this.getHeros();
  }
  onSelect(hero): void{
    this.selectedHero = hero;
  }
  getHeros(): void{
    this.heroService.getHeroes().subscribe(heroes => this.hero_list = heroes);
  }

}

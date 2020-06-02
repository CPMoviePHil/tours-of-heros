import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  selectedHero: Hero;
  hero_list: Hero[];
  constructor(private heroService: HeroService, private message_serv: MessageService) { }

  ngOnInit(): void {
    //this.hero_list = this.heroService.getHeros();
    //this.hero = 'GigiTsaDa';
    this.getHeros();
  }
  onSelect(hero): void{
    this.selectedHero = hero;
    this.message_serv.add(`HeroService: Selected hero id=${hero.id}`);
  }
  getHeros(): void{
    this.heroService.getHeroes().subscribe(hero_i => this.hero_list = hero_i);
  }

}

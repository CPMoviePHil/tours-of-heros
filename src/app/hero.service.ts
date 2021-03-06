import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROS } from './mock-hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private message_serv: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.message_serv.add('HeroService: fetched heroes');
    return of(HEROS);
  }
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.message_serv.add(`HeroService: fetched hero id=${id}`);
    return of(HEROS.find(hero => hero.id === id));
  }
}

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {


  heros;
  hero: Hero = {
    id:1,
    name:'Windstorms',
  }
  constructor() { }

  ngOnInit(): void {
    //this.hero = 'GigiTsaDa';
    this.heros = [
      {
        'name':'jordon',
        'age': 21,
        'ranking': 1,
      },
      {
        'name':'jackson',
        'age': 42,
        'ranking': 2,
      },
      {
        'name':'Phil',
        'age': 24,
        'ranking': 3,
      },

    ];
  }

}

import { Component } from '@angular/core';
import { OnInit    } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: []
})

export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes); 
  }
  constructor(private heroService: HeroService) {
  }
}
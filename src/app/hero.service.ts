import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROS } from './mock.heros';

@Injectable()
export class HeroService {

  constructor(private heroService: HeroService) { 

  }

  getHeroes(): Hero[] {
    return HEROS;
  }

}
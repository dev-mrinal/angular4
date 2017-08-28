import { Component, OnInit }        from '@angular/core';

import { Router } from '@angular/router';
import { ParamMap } from '@angular/router';

import { Location }  from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero }         from './hero';
import { HeroService }  from './hero.service';
@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
 heroes: Hero[];
  constructor(
    private heroService: HeroService,
    private route: Router,
    private location: Location
  ) {}


  getHero(): void {
    //this.heroService.getHero(id: number).then(heroes => heroes.find(hero => hero.id === id));
  }

  ngOnInit(): void {
   this.getHero();
 }

  goBack(): void {
    this.location.back();
  }
}

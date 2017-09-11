import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location }  from '@angular/common';
import { Hero }   from './hero';
import { HeroService }  from './hero.service';
@Component({
  selector: 'hero-detail',
  templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}


ngOnInit(): void {

 this.heroService.getHero( this.route.snapshot.params['id']).then(hero => this.hero = hero);

 }

  goBack(): void {
    this.location.back();
  }
}

import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location }  from '@angular/common';
import { Hero }   from './hero';
import { HeroService }  from './hero.service';
@Component({
  selector: 'hero-detail',
  template: `<div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>

    <div>
      <label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name" />
    </div>
    <button (click)="goBack()">Back</button>
  </div>`
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


 /*
 heroes => heroes.find(hero => hero.id === id)
  this.route.params
        .switchMap((params: params) => this.heroService.getHero(+params.get('id')))
        .observers(hero => this.hero = 10);

   this.route.params
    .map(params => params['id'])
    .subscribe((id) => {
      this.heroService
        .getHero(id)
        .subscribe(hero => this.hero = hero);
    });
 */

 }

  goBack(): void {
    this.location.back();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'about-page',
  template: `{{aboutTitle}}<ul class="heroes">
  <li *ngFor="let hero of heroes"
  [class.selected]="hero === selectedHero"
  (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.product_name}}
  </li>
</ul>
<div *ngIf="selectedHero">
  <h2>
    {{selectedHero.name | uppercase}} is my hero
  </h2>
  <button (click)="gotoDetail()">View Details</button>
</div>
`,
  styleUrls: ['./app.component.css']
})
export class AboutComponent implements OnInit {

aboutTitle = "Latin 2 literature from 45 BC, making it over 2000 years old.";

heroes: Hero[];
selectedHero: Hero;


  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
   this.getHeroes();
 }

 onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}

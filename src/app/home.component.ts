import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'home-page',
  templateUrl: 'home.component.html'
})

export class HomeComponent  {

constructor(
  private router: Router,
  private heroService: HeroService) { }

//homeTitle = "Mrinal";

login() {
//console.log(this.username);
}

}

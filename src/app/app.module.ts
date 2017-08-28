import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }        from './app.component';
import { HomeComponent }   from './home.component';
import { AboutComponent }  from './about.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from './hero.service';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeroDetailComponent
  ],
   providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

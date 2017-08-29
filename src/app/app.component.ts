import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
    template: `
      <h1>{{title}}</h1>
      <nav>
        <a routerLink="/home" routerLinkActive="active">Home</a>
        <a routerLink="/about" routerLinkActive="active">About</a>
        <a routerLink="/about" routerLinkActive="active">services</a>
        <a routerLink="/about" routerLinkActive="active">Contact</a>
      </nav>
      <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Welcome to Cybage';

}

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

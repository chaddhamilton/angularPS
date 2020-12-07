import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `

  <nav class='navbar navbar-expand navbar-light bg-light'>
  <a class='navbar-brand'>{{pageTitle}}</a>
            <ul class='nav nav-pills'>
            <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
            <li><a class='nav-link' id='BookNavLink' [routerLink]="['/Books']">Books</a></li>
            </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
            `
})

export class AppComponent {
  pageTitle: string = "Booker";
  something ='this is it';
  somethingEles : string ='heyey';
  listOfStuff : Array<string> = ["john", "tom", "frank", "bill"];
}

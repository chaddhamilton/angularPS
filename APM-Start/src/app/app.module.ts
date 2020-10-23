import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import {FormsModule} from '@angular/forms';
import {ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';
import {StarComponent} from './shared/star.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component'
import {WelcomeComponent} from './home/welcome.component';

import { from } from 'rxjs';
import { PagenotfoundComponent } from './pagenotfound.component';
import { GenreComponent } from './shared/genre.component';
@NgModule({ //internal modules
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent,
    PagenotfoundComponent,
    GenreComponent
  ],
  imports: [ //external modules
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([ //Establish routes for application
      {path: 'products', component:ProductListComponent},
      {path: 'products/:id', component:ProductDetailComponent},
      //{path: 'products/:id/:param2', component:ProductDetailComponent}, multiple params ex
      {path: 'welcome', component:WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch:'full'},
      {path: '**', component:PagenotfoundComponent}
    ])
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SlideComponent } from './slide/slide.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LifetakComponent } from './lifetak/lifetak.component';
import { TechtakComponent } from './techtak/techtak.component';
import { SportstakComponent } from './sportstak/sportstak.component';
import { FoodtakComponent } from './foodtak/foodtak.component';



@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
 
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'lifetak',
        component: LifetakComponent
      },{
        path: 'techtak',
        component: TechtakComponent
      },{
        path: 'sportstak',
        component: SportstakComponent
      },{
        path: 'foodtak',
        component: FoodtakComponent
      }
   
    ])
    
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideComponent,
    FooterComponent,
    HomeComponent,
    LifetakComponent,
    TechtakComponent,
    SportstakComponent,
    FoodtakComponent,
    
  ],

  providers: [],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})
export class AppModule { }

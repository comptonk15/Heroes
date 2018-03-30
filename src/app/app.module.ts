import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    HeroService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

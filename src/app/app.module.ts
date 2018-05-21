import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TeamCompComponent } from './team-comp/team-comp.component';
import { CountryCompComponent } from './country-comp/country-comp.component';

import {TeamService} from "./team-comp/team.service";
import {CountryService} from "./country-comp/country.service";



@NgModule({
  declarations: [
    AppComponent,
    TeamCompComponent,
    CountryCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
      
  ],
  providers: [TeamService, CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurbankComponent } from './burbank/burbank.component';
import { SjComponent } from './sj/sj.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DcComponent } from './dc/dc.component';
import { SeattleComponent } from './seattle/seattle.component';
import { DallasComponent } from './dallas/dallas.component';
import { HttpModule} from '@angular/http';
import {WeatherService} from './weather.service';
@NgModule({
  declarations: [
    AppComponent,
    BurbankComponent,
    SjComponent,
    ChicagoComponent,
    DcComponent,
    SeattleComponent,
    DallasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

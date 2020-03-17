import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { TotalCasesComponent } from './total-cases/total-cases.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ConseilsComponent } from './conseils/conseils.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    FooterComponent,
    MapComponent,
    TotalCasesComponent,
    NavbarComponent,
    ConseilsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NxModule } from '@nrwl/nx';
import { MaterialModule} from 'libs/material/src/lib/material.module'
import { HomeComponent } from './home/home.component';
import { SwapiListComponent } from './swapi-list/swapi-list.component';
import { SwapiDetailComponent } from './swapi-detail/swapi-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwapiComponent } from './swapi/swapi.component';
import { SwapiService } from './shared/swapi.service';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [AppComponent, HomeComponent, SwapiListComponent, SwapiDetailComponent, SwapiComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule
  ],
  providers: [SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule {}

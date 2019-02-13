import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'libs/material/src/lib/material.module'
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SodaComponent } from './soda/soda.component';
import { SodaListComponent } from './soda/soda-list/soda-list.component';
import { SodaDetailComponent } from './soda/soda-detail/soda-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, HomeComponent, SodaComponent, SodaListComponent, SodaDetailComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

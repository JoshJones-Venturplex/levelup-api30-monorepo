import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'libs/material/src/lib/material.module';
import { HomeComponent } from './home/home.component';
import { InstrumentComponent } from './instrument/instrument.component';
import { InstrumentListComponent } from './instrument/instrument-list/instrument-list.component';
import { InstrumentDetailComponent } from './instrument/instrument-detail/instrument-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, HomeComponent, InstrumentComponent, InstrumentListComponent, InstrumentDetailComponent],
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

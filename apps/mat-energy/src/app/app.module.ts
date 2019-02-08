import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from 'libs/material/src/lib/material.module';
import { EnergyListComponent } from './energy/energy-list/energy-list.component';
import { EnergyDetailComponent } from './energy/energy-detail/energy-detail.component';
import { EnergyComponent } from './energy/energy.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, EnergyListComponent, EnergyDetailComponent, EnergyComponent],
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

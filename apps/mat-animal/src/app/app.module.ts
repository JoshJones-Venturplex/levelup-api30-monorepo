import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'libs/material/src/lib/material.module'
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AnimalComponent } from './animal/animal.component';
import { AnimalListComponent } from './animal/animal-list/animal-list.component';
import { AnimalDetailComponent } from './animal/animal-detail/animal-detail.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AnimalComponent, AnimalListComponent, AnimalDetailComponent],
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

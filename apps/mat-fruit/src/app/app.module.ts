import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@workspace/material'; 
import { HomeComponent } from './home/home.component';
import { FruitComponent } from './fruit/fruit.component';
import { FruitListComponent } from './fruit/fruit-list/fruit-list.component';
import { FruitDetailComponent } from './fruit/fruit-detail/fruit-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FruitComponent, 
    FruitListComponent, 
    FruitDetailComponent
  ],
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

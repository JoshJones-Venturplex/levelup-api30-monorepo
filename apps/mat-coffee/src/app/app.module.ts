import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { CoffeeListComponent } from './coffee/coffee-list/coffee-list.component';
import { CoffeeDetailComponent } from './coffee/coffee-detail/coffee-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@workspace/material';
import { CoreStateModule } from '@workspace/core-state';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoffeeComponent,
    CoffeeListComponent,
    CoffeeDetailComponent
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

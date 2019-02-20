import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@workspace/material';
import { AppRoutingModule } from './app-routing.module';
import { CoreStateModule } from '@workspace/core-state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CheeseComponent } from './cheese/cheese.component';
import { CheeseDetailComponent } from './cheese/cheese-detail/cheese-detail.component';
import { CheeseListComponent } from './cheese/cheese-list/cheese-list.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CheeseComponent, CheeseDetailComponent, CheeseListComponent],
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

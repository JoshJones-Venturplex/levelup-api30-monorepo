import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';

import { NebularModule } from '@workspace/nebular';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PcpartComponent } from './pcpart/pcpart.component';
import { PcpartListComponent } from './pcpart/pcpart-list/pcpart-list.component';
import { PcpartDetailComponent } from './pcpart/pcpart-detail/pcpart-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@workspace/material';
import { CoreStateModule } from '@workspace/core-state';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PcpartComponent,
    PcpartListComponent,
    PcpartDetailComponent
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    NbThemeModule.forRoot(),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NebularModule,
    NbLayoutModule,
    AppRoutingModule,
    MaterialModule,
    CoreStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

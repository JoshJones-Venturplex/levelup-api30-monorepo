import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { CharacterListComponent } from './character/character-list/character-list.component';
import { CharacterDetailComponent } from './character/character-detail/character-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@workspace/material';
import { CoreStateModule } from '@workspace/core-state';

@NgModule({
  declarations: [AppComponent, HomeComponent, CharacterComponent, CharacterListComponent, CharacterDetailComponent],
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
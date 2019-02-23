import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/nx';

import { reducers } from '.';
import { AuthEffects } from './auth/auth.effects';
import { AlbumEffects } from './album/album.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      AuthEffects,
      AlbumEffects
    ])
  ]
})
export class SpotifyStateModule { }

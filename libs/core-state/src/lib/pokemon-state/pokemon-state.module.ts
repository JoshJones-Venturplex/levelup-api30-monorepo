import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/nx';

import { reducers } from '.';
import { PokemonEffects } from './pokemon/pokemon.effects';
import { PokemonDetailsEffects } from 'libs/core-state/src/lib/pokemon-state/pokemon-details/pokemon-details.effects';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    EffectsModule.forRoot([
      PokemonEffects,
      PokemonDetailsEffects
    ]),
  ],
  declarations: []
})
export class PokemonStateModule { }
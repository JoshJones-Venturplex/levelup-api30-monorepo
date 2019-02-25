import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { selectAllPokemons, selectCurrentPokemon } from '..';
import { PokemonActionTypes } from './pokemon.actions';
import * as PokemonActions from './pokemon.actions';
import { PokemonState } from './pokemon.reducer';

@Injectable({
  providedIn: 'root'
})
export class PokemonFacade {
  allPokemons$ = this.store.pipe(select(selectAllPokemons));
  currentPokemon$ = this.store.pipe(select(selectCurrentPokemon));

  constructor(
    private store: Store<PokemonState>,
    private actions$: ActionsSubject
  ) {}

  selectPokemon(itemId) {
    this.store.dispatch(new PokemonActions.PokemonSelected(itemId));
  }

  loadPokemons(offset) {
    this.store.dispatch(new PokemonActions.LoadPokemons(offset));
  }
}

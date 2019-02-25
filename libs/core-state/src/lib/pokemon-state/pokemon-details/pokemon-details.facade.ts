import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { selectAllPokemonDetails, selectCurrentPokemonDetails } from '..';
import { PokemonDetailsActionTypes } from './pokemon-details.actions';
import * as PokemonDetailsActions from './pokemon-details.actions';
import { PokemonDetailsState } from './pokemon-details.reducer';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailsFacade {
  allPokemonDetails$ = this.store.pipe(select(selectAllPokemonDetails));
  currentPokemonDetails$ = this.store.pipe(select(selectCurrentPokemonDetails));

  constructor(
    private store: Store<PokemonDetailsState>,
    private actions$: ActionsSubject
  ) {}

  selectPokemonDetails(itemId) {
    this.store.dispatch(new PokemonDetailsActions.PokemonDetailsSelected(itemId));
  }

  loadPokemonDetails(url) {
    this.store.dispatch(new PokemonDetailsActions.LoadPokemonDetails(url));
  }
}

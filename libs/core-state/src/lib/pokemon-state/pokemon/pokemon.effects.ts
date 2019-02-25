import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { Pokemon } from '@workspace/core-data';
import { PokemonService } from '@workspace/core-data';

import {
    PokemonActionTypes,
    LoadPokemons,
    PokemonsLoaded
} from './pokemon.actions';
import { PokemonState } from './pokemon.reducer';

@Injectable({providedIn: 'root'})
export class PokemonEffects {

    constructor(
        private actions$: Actions,
        private dataPersistence: DataPersistence<PokemonState>,
        private pokemonService: PokemonService
    ) {}

    @Effect() effect$ = this.actions$.pipe(ofType(PokemonActionTypes.PokemonAction));

    @Effect()
    loadPokemons$ = this.dataPersistence.fetch(PokemonActionTypes.LoadPokemons, {
        run: (action: LoadPokemons, state: PokemonState) => {
            return this.pokemonService.getPokemon(action.payload).pipe(map((res: any) => new PokemonsLoaded(res.results)))
        },

        onError: (action: LoadPokemons, error) => {
            console.error('Error', error);
        }
    });
}
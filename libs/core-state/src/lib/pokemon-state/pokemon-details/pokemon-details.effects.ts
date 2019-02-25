import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { PokemonDetail } from '@workspace/core-data';
import { PokemonService } from '@workspace/core-data';

import {
    PokemonDetailsActionTypes,
    LoadPokemonDetails,
    PokemonDetailsLoaded
} from './pokemon-details.actions';
import { PokemonDetailsState } from './pokemon-details.reducer';

@Injectable({providedIn: 'root'})
export class PokemonDetailsEffects {

    constructor(
        private actions$: Actions,
        private dataPersistence: DataPersistence<PokemonDetailsState>,
        private pokemonService: PokemonService
    ) {}

    @Effect() effect$ = this.actions$.pipe(ofType(PokemonDetailsActionTypes.PokemonDetailsAction));

    @Effect()
    loadPokemonDetails$ = this.dataPersistence.fetch(PokemonDetailsActionTypes.LoadPokemonDetails, {
        run: (action: LoadPokemonDetails, state: PokemonDetailsState) => {
            return this.pokemonService.getPokemonDetails(action.payload).pipe(map((res: any) => new PokemonDetailsLoaded(res)))
        },

        onError: (action: LoadPokemonDetails, error) => {
            console.error('Error', error);
        }
    });
}
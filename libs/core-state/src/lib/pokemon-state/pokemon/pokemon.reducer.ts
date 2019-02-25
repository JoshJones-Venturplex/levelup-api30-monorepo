import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Pokemon } from '@workspace/core-data';

import { PokemonActions, PokemonActionTypes } from './pokemon.actions';

export interface PokemonState extends EntityState<Pokemon> {
    selectedPokemonId: string | null;
}

export const adapter: EntityAdapter<Pokemon> = createEntityAdapter<Pokemon>({
    selectId: pokemon => pokemon.url
});
export const initialState: PokemonState = adapter.getInitialState({
    selectedPokemonId: null
});

export function pokemonReducer(state = initialState, action: PokemonActions): PokemonState {
    switch (action.type) {
        case PokemonActionTypes.PokemonSelected: {
            return Object.assign({}, state, { selectedPokemonId: action.payload });
        }

        case PokemonActionTypes.PokemonsLoaded: {
            return adapter.addAll(action.payload, state);
        }

        default:
            return state;
    }
}

export const getSelectedPokemonId = (state: PokemonState) => state.selectedPokemonId;

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectPokemonIds = selectIds;

export const selectPokemonEntities = selectEntities;

export const selectAllPokemons = selectAll;

export const selectPokemonTotal = selectTotal;
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { PokemonDetail } from '@workspace/core-data';

import { PokemonDetailsActions, PokemonDetailsActionTypes } from './pokemon-details.actions';

export interface PokemonDetailsState extends EntityState<PokemonDetail> {
    selectedPokemonDetailsId: string | null;
}

export const adapter: EntityAdapter<PokemonDetail> = createEntityAdapter<PokemonDetail>({
    selectId: pokemonDetails => pokemonDetails.name
});
export const initialState: PokemonDetailsState = adapter.getInitialState({
    selectedPokemonDetailsId: null
});

export function pokemonDetailsReducer(state = initialState, action: PokemonDetailsActions): PokemonDetailsState {
    switch (action.type) {
        case PokemonDetailsActionTypes.PokemonDetailsSelected: {
            return Object.assign({}, state, { selectedPokemonDetailsId: action.payload });
        }

        case PokemonDetailsActionTypes.PokemonDetailsLoaded: {
            return adapter.addOne(action.payload, state);
        }

        default:
            return state;
    }
}

export const getSelectedPokemonDetailsId = (state: PokemonDetailsState) => state.selectedPokemonDetailsId;

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectPokemonDetailsIds = selectIds;

export const selectPokemonDetailsEntities = selectEntities;

export const selectAllPokemonDetails = selectAll;

export const selectPokemonDetailsTotal = selectTotal;
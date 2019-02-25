import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromPokemon from './pokemon/pokemon.reducer';
import * as fromPokemonDetails from './pokemon-details/pokemon-details.reducer';

import { Pokemon } from '@workspace/core-data';
import { PokemonDetail } from '@workspace/core-data';

export interface AppState {
  pokemons: fromPokemon.PokemonState;
  pokemonDetails: fromPokemonDetails.PokemonDetailsState;
}

export const reducers: ActionReducerMap<AppState> = {
  pokemons: fromPokemon.pokemonReducer,
  pokemonDetails: fromPokemonDetails.pokemonDetailsReducer
};

export const selectPokemonState = createFeatureSelector<
  fromPokemon.PokemonState
>('pokemons');

export const selectPokemonIds = createSelector(
  selectPokemonState,
  fromPokemon.selectPokemonIds
);
export const selectPokemonEntities = createSelector(
  selectPokemonState,
  fromPokemon.selectPokemonEntities
);
export const selectAllPokemons = createSelector(
  selectPokemonState,
  fromPokemon.selectAllPokemons
);
export const selectCurrentPokemonId = createSelector(
  selectPokemonState,
  fromPokemon.getSelectedPokemonId
);

const emptyPokemon: Pokemon = {
  name: '',
  url: ''
};

export const selectCurrentPokemon = createSelector(
  selectPokemonEntities,
  selectCurrentPokemonId,
  (pokemonEntities, pokemonId) => {
    return pokemonId ? pokemonEntities[pokemonId] : emptyPokemon;
  }
);

export const selectPokemonDetailsState = createFeatureSelector<
  fromPokemonDetails.PokemonDetailsState
>('pokemonDetails');

export const selectPokemonDetailsIds = createSelector(
  selectPokemonDetailsState,
  fromPokemonDetails.selectPokemonDetailsIds
);
export const selectPokemonDetailsEntities = createSelector(
  selectPokemonDetailsState,
  fromPokemonDetails.selectPokemonDetailsEntities
);
export const selectAllPokemonDetails = createSelector(
  selectPokemonDetailsState,
  fromPokemonDetails.selectAllPokemonDetails
);
export const selectCurrentPokemonDetailsId = createSelector(
  selectPokemonDetailsState,
  fromPokemonDetails.getSelectedPokemonDetailsId
);

const emptyPokemonDetails: PokemonDetail = {
  base_happiness: null,
  capture_rate: null,
  color: {
    name: '',
    url: '',
  },
  egg_groups: [],
  evolution_chain: {
    url: '',
  },
  evolves_from_species: null,
  flavor_text_entries: [],
  form_descriptions: [],
  forms_switchable: null,
  gender_rate: null,
  genera: [],
  generation: {
    name: '',
    url: '',
  },
  growth_rate: {
    name: '',
    url: '',
  },
  habitat: {
    name: '',
    url: '',
  },
  has_gender_differences: null,
  hatch_counter: null,
  id: null,
  is_baby: null,
  name: '',
  names: [],
  order: null,
  pal_park_encounters: [],
  pokedex_numbers: [],
  shape: {
    name: '',
    url: ''
  },
  varieties: []
}

export const selectCurrentPokemonDetails = createSelector(
  selectPokemonDetailsEntities,
  selectCurrentPokemonDetailsId,
  (pokemonDetailsEntities, pokemonDetailsId) => {
    return pokemonDetailsId
      ? pokemonDetailsEntities[pokemonDetailsId]
      : emptyPokemonDetails;
  }
);

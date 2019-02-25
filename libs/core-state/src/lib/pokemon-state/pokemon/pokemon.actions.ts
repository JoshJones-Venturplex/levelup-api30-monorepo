import { Action } from '@ngrx/store';
import { Pokemon } from '@workspace/core-data';

export enum PokemonActionTypes {
    PokemonAction = '[Pokemons] Action',
    PokemonSelected = '[Pokemons] Selected',
    LoadPokemons = '[Pokemons] Load Data',
    PokemonsLoaded = '[Pokemons] Data Loaded',
}

export class Pokemons implements Action { 
    readonly type = PokemonActionTypes.PokemonAction;
}

export class PokemonSelected implements Action {
    readonly type = PokemonActionTypes.PokemonSelected;
    constructor(public payload) {}
}

export class LoadPokemons implements Action {
    readonly type = PokemonActionTypes.LoadPokemons;
    constructor(public payload) {}
}

export class PokemonsLoaded implements Action {
    readonly type = PokemonActionTypes.PokemonsLoaded;
    constructor(public payload: Pokemon[]) {}
}

export type PokemonActions = Pokemons
  | PokemonSelected
  | LoadPokemons
  | PokemonsLoaded
  ;
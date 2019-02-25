import { Action } from '@ngrx/store';
import { PokemonDetail } from '@workspace/core-data';

export enum PokemonDetailsActionTypes {
    PokemonDetailsAction = '[PokemonDetails] Action',
    PokemonDetailsSelected = '[PokemonDetails] Selected',
    LoadPokemonDetails = '[PokemonDetails] Load Data',
    PokemonDetailsLoaded = '[PokemonDetails] Data Loaded',
}

export class PokemonDetails implements Action { 
    readonly type = PokemonDetailsActionTypes.PokemonDetailsAction;
}

export class PokemonDetailsSelected implements Action {
    readonly type = PokemonDetailsActionTypes.PokemonDetailsSelected;
    constructor(public payload) {}
}

export class LoadPokemonDetails implements Action {
    readonly type = PokemonDetailsActionTypes.LoadPokemonDetails;
    constructor(public payload) {}
}

export class PokemonDetailsLoaded implements Action {
    readonly type = PokemonDetailsActionTypes.PokemonDetailsLoaded;
    constructor(public payload: PokemonDetail) {}
}

export type PokemonDetailsActions = PokemonDetails
  | PokemonDetailsSelected
  | LoadPokemonDetails
  | PokemonDetailsLoaded
  ;
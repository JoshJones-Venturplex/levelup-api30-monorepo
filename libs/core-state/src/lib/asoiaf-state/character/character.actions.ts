import { Action } from '@ngrx/store';
import { Character } from '@workspace/core-data';

export enum CharacterActionTypes {
    CharacterAction = '[Characters] Action',
    CharacterSelected = '[Characters] Selected',
    LoadCharacters = '[Characters] Load Data',
    CharactersLoaded = '[Characters] Data Loaded',
}

export class Characters implements Action { 
    readonly type = CharacterActionTypes.CharacterAction;
}

export class CharacterSelected implements Action {
    readonly type = CharacterActionTypes.CharacterSelected;
    constructor(public payload) {}
}

export class LoadCharacters implements Action {
    readonly type = CharacterActionTypes.LoadCharacters;
    constructor(public payload) {}
}

export class CharactersLoaded implements Action {
    readonly type = CharacterActionTypes.CharactersLoaded;
    constructor(public payload: Character[]) {}
}

export type CharacterActions = Characters
  | CharacterSelected
  | LoadCharacters
  | CharactersLoaded
  ;
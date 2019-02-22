import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCharacter from './character/character.reducer';

import { Character } from '@workspace/core-data';

export interface AppState {
    characters: fromCharacter.CharacterState
}

export const reducers: ActionReducerMap<AppState> = {
    characters: fromCharacter.characterReducer
}

export const selectCharacterState = createFeatureSelector<fromCharacter.CharacterState>('characters');

export const selectCharacterIds = createSelector(
    selectCharacterState,
    fromCharacter.selectCharacterIds
  );
  export const selectCharacterEntities = createSelector(
    selectCharacterState,
    fromCharacter.selectCharacterEntities
  );
  export const selectAllCharacters = createSelector(
    selectCharacterState,
    fromCharacter.selectAllCharacters
  );
  export const selectCurrentCharacterId = createSelector(
    selectCharacterState,
    fromCharacter.getSelectedCharacterId
  );
  
  const emptyCharacter: Character = {
    url: '',
    name: '',
    culture: '',
    born: '',
    died: '',
    titles: [],
    aliases: [],
    father: '',
    mother: '',
    spouse: '',
    allegiances: [],
    books: [],
    povBooks: [],
    tvSeries: [],
    playedBy: []
  }
  
  export const selectCurrentCharacter = createSelector(
    selectCharacterEntities,
    selectCurrentCharacterId,
    (characterEntities, characterId) => {
      return characterId ? characterEntities[characterId] : emptyCharacter;
    }
  );
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Character } from '@workspace/core-data';

import { CharacterActions, CharacterActionTypes } from './character.actions';

export interface CharacterState extends EntityState<Character> {
    selectedCharacterId: string | null;
}

export const adapter: EntityAdapter<Character> = createEntityAdapter<Character>({
    selectId: character => character.url
});
export const initialState: CharacterState = adapter.getInitialState({
    selectedCharacterId: null
});

export function characterReducer(state = initialState, action: CharacterActions): CharacterState {
    switch (action.type) {
        case CharacterActionTypes.CharacterSelected: {
            return Object.assign({}, state, { selectedCharacterId: action.payload });
        }

        case CharacterActionTypes.CharactersLoaded: {
            return adapter.addAll(action.payload, state);
        }

        default:
            return state;
    }
}

export const getSelectedCharacterId = (state: CharacterState) => state.selectedCharacterId;

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectCharacterIds = selectIds;

export const selectCharacterEntities = selectEntities;

export const selectAllCharacters = selectAll;

export const selectCharacterTotal = selectTotal;
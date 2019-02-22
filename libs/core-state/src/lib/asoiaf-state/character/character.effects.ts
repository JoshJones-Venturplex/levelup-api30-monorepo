import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { Character } from '@workspace/core-data';
import { AsoiafService } from '@workspace/core-data';

import {
    CharacterActionTypes,
    LoadCharacters,
    CharactersLoaded
} from './character.actions';
import { CharacterState } from './character.reducer';

@Injectable({providedIn: 'root'})
export class CharacterEffects {

    constructor(
        private actions$: Actions,
        private dataPersistence: DataPersistence<CharacterState>,
        private asoiafService: AsoiafService
    ) {}

    @Effect() effect$ = this.actions$.pipe(ofType(CharacterActionTypes.CharacterAction));

    @Effect()
    loadCharacters$ = this.dataPersistence.fetch(CharacterActionTypes.LoadCharacters, {
        run: (action: LoadCharacters, state: CharacterState) => {
            return this.asoiafService.getCharacters(action.payload).pipe(map((res: Character[]) => new CharactersLoaded(res)))
        },

        onError: (action: LoadCharacters, error) => {
            console.error('Error', error);
        }
    });
}
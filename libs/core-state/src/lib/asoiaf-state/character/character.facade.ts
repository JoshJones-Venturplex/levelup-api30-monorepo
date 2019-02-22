import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { selectAllCharacters, selectCurrentCharacter } from '..';
import { CharacterActionTypes } from './character.actions';
import * as CharacterActions from './character.actions';
import { CharacterState } from './character.reducer';

@Injectable({
  providedIn: 'root'
})
export class CharacterFacade {
  allCharacters$ = this.store.pipe(select(selectAllCharacters));
  currentCharacter$ = this.store.pipe(select(selectCurrentCharacter));

  constructor(
    private store: Store<CharacterState>,
    private actions$: ActionsSubject
  ) {}

  selectCharacter(itemId) {
    this.store.dispatch(new CharacterActions.CharacterSelected(itemId));
  }

  loadCharacters(pageNumber) {
    this.store.dispatch(new CharacterActions.LoadCharacters(pageNumber));
  }
}

import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { selectAllPlayers, selectCurrentPlayer } from '..';
import { PlayersActionTypes } from './player.actions';
import * as PlayersActions from './player.actions';
import { PlayersState } from './player.reducer';

@Injectable({
  providedIn: 'root'
})
export class PlayersFacade {
  allPlayers$ = this.store.pipe(select(selectAllPlayers));
  currentPlayer$ = this.store.pipe(select(selectCurrentPlayer));

  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === PlayersActionTypes.AddPlayer
        || action.type === PlayersActionTypes.UpdatePlayer
        || action.type === PlayersActionTypes.DeletePlayer
      )
    );

  constructor(private store: Store<PlayersState>, private actions$: ActionsSubject) {}

  selectPlayer(itemId) {
    this.store.dispatch(new PlayersActions.PlayerSelected(itemId));
  }

  loadPlayers() {
    this.store.dispatch(new PlayersActions.LoadPlayers());
  }

  addPlayer(item) {
    this.store.dispatch(new PlayersActions.AddPlayer(item));
  }

  updatePlayer(item) {
    this.store.dispatch(new PlayersActions.UpdatePlayer(item));
  }

  deletePlayer(item) {
    this.store.dispatch(new PlayersActions.DeletePlayer(item));
  }
}
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { Player } from '@workspace/core-data';
import { PlayerService } from '@workspace/core-data';

import {
  AddPlayer,
  DeletePlayer,
  PlayerAdded,
  PlayerDeleted,
  PlayersActionTypes,
  PlayersLoaded,
  PlayerUpdated,
  LoadPlayers,
  UpdatePlayer,
} from './player.actions';
import { PlayersState } from './player.reducer';

@Injectable({providedIn: 'root'})
export class PlayersEffects {

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PlayersState>,
    private playersService: PlayerService
  ) {}
  
  @Effect() effect$ = this.actions$.pipe(ofType(PlayersActionTypes.PlayersAction));

  @Effect()
  loadPlayers$ = this.dataPersistence.fetch(PlayersActionTypes.LoadPlayers, {
    run: (action: LoadPlayers, state: PlayersState) => {
      return this.playersService.getPlayers().pipe(map((res: Player[]) => new PlayersLoaded(res)))
    },

    onError: (action: LoadPlayers, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  addPlayer$ = this.dataPersistence.pessimisticUpdate(PlayersActionTypes.AddPlayer, {
    run: (action: AddPlayer, state: PlayersState) => {
      return this.playersService.createPlayer(action.payload).pipe(map((res: Player) => new PlayerAdded(res)))
    },

    onError: (action: AddPlayer, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  updatePlayer$ = this.dataPersistence.pessimisticUpdate(PlayersActionTypes.UpdatePlayer, {
    run: (action: UpdatePlayer, state: PlayersState) => {
      return this.playersService.updatePlayer(action.payload).pipe(map((res: Player) => new PlayerUpdated(res)))
    },

    onError: (action: UpdatePlayer, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  deletePlayer$ = this.dataPersistence.pessimisticUpdate(PlayersActionTypes.DeletePlayer, {
    run: (action: DeletePlayer, state: PlayersState) => {
      return this.playersService.deletePlayer(action.payload).pipe(map(_ => new PlayerDeleted(action.payload)))
    },

    onError: (action: DeletePlayer, error) => {
      console.error('Error', error);
    }
  });
}
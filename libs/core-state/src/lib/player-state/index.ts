import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPlayers from './player/player.reducer';

import { Player } from '@workspace/core-data';

export interface AppState {
  players: fromPlayers.PlayersState
}

export const reducers: ActionReducerMap<AppState> = {
  players: fromPlayers.playersReducer
};

export const selectPlayersState = createFeatureSelector<fromPlayers.PlayersState>('players');

export const selectPlayerIds = createSelector(
  selectPlayersState,
  fromPlayers.selectPlayerIds
);
export const selectPlayerEntities = createSelector(
  selectPlayersState,
  fromPlayers.selectPlayerEntities
);
export const selectAllPlayers = createSelector(
  selectPlayersState,
  fromPlayers.selectAllPlayers
);
export const selectCurrentPlayerId = createSelector(
  selectPlayersState,
  fromPlayers.getSelectedPlayerId
);

const emptyPlayer: Player = {
    id: null,
    name: '',
    height: '',
    position: '',
    number: null,
    team:''
}

export const selectCurrentPlayer = createSelector(
  selectPlayerEntities,
  selectCurrentPlayerId,
  (playerEntities, playerId) => {
    return playerId ? playerEntities[playerId] : emptyPlayer;
  }
);
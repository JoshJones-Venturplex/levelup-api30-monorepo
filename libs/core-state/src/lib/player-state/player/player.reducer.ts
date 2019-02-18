import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Player } from '@workspace/core-data';

import { PlayersActions, PlayersActionTypes } from './player.actions';

/**
 * Interface to the part of the Store containing PlayersState
 * and other information related to PlayersData.
 */
export interface PlayersState extends EntityState<Player> {
  selectedPlayerId: string | null;
}

export const adapter: EntityAdapter<Player> = createEntityAdapter<Player>();
export const initialState: PlayersState = adapter.getInitialState({
  // additional entity state properties
  selectedPlayerId: null,
});

export function playersReducer(state = initialState, action: PlayersActions): PlayersState {
  switch (action.type) {
    case PlayersActionTypes.PlayerSelected: {
      return Object.assign({}, state, { selectedPlayerId: action.payload });
    }

    case PlayersActionTypes.PlayersLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case PlayersActionTypes.PlayerAdded: {
      return adapter.addOne(action.payload, state);
    }

    case PlayersActionTypes.PlayerUpdated: {
      return adapter.upsertOne(action.payload, state);
    }

    case PlayersActionTypes.PlayerDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedPlayerId = (state: PlayersState) => state.selectedPlayerId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of player ids
export const selectPlayerIds = selectIds;

// select the dictionary of player entities
export const selectPlayerEntities = selectEntities;

// select the array of players
export const selectAllPlayers = selectAll;

// select the total player count
export const selectPlayerTotal = selectTotal;
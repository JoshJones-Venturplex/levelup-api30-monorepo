import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Cheese } from '@workspace/core-data';

import { CheesesActions, CheesesActionTypes } from './cheese.actions';

export interface CheesesState extends EntityState<Cheese> {
  selectedCheeseId: string | null;
}

export const adapter: EntityAdapter<Cheese> = createEntityAdapter<Cheese>();
export const initialState: CheesesState = adapter.getInitialState({
  selectedCheeseId: null,
});

export function cheesesReducer(state = initialState, action: CheesesActions): CheesesState {
  switch (action.type) {
    case CheesesActionTypes.CheeseSelected: {
      return Object.assign({}, state, { selectedCheeseId: action.payload });
    }

    case CheesesActionTypes.CheesesLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case CheesesActionTypes.CheeseAdded: {
      return adapter.addOne(action.payload, state);
    }

    case CheesesActionTypes.CheeseUpdated: {
      return adapter.upsertOne(action.payload, state);
    }

    case CheesesActionTypes.CheeseDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedCheeseId = (state: CheesesState) => state.selectedCheeseId;

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectCheeseIds = selectIds;

export const selectCheeseEntities = selectEntities;

export const selectAllCheeses = selectAll;

export const selectCheeseTotal = selectTotal;
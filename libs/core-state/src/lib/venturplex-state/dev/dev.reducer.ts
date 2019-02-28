import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Dev } from '@workspace/core-data';

import { DevsActions, DevsActionTypes } from './dev.actions';

export interface DevsState extends EntityState<Dev> {
  selectedDevId: string | null;
  loading: boolean;
}

export const adapter: EntityAdapter<Dev> = createEntityAdapter<Dev>();
export const initialState: DevsState = adapter.getInitialState({
  selectedDevId: null,
  loading: false
});

export function devsReducer(state = initialState, action: DevsActions): DevsState {
  switch (action.type) {
    case DevsActionTypes.DevSelected: {
      return Object.assign({}, state, { selectedDevId: action.payload });
    }

    case DevsActionTypes.LoadDevs: {
      return ({ ...state, loading: true });
    }

    case DevsActionTypes.DevsLoaded: {
      state = {...state, loading: false};
      return adapter.addAll(action.payload, state);
    }

    case DevsActionTypes.AddDev: {
        return ({ ...state, loading: true });
      }

    case DevsActionTypes.DevAdded: {
      state = {...state, loading: false};
      return adapter.addOne(action.payload, state);
    }

    case DevsActionTypes.UpdateDev: {
        return ({ ...state, loading: true });
      }

    case DevsActionTypes.DevUpdated: {
        state = {...state, loading: false};
      return adapter.upsertOne(action.payload, state);
    }

    case DevsActionTypes.DeleteDev: {
        return ({ ...state, loading: true });
      }

    case DevsActionTypes.DevDeleted: {
      state = {...state, loading: false};
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedDevId = (state: DevsState) => state.selectedDevId;

export const isLoading = (state: DevsState) => state.loading;

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectDevIds = selectIds;

export const selectDevEntities = selectEntities;

export const selectAllDevs = selectAll;

export const selectDevTotal = selectTotal;
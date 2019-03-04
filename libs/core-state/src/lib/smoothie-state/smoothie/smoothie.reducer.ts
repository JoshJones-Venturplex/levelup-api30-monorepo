import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Smoothie } from '@workspace/core-data';

import { SmoothiesActions, SmoothiesActionTypes } from './smoothie.actions';

export interface SmoothiesState extends EntityState<Smoothie> {
  selectedSmoothieId: string | null;
  loading: boolean;
}

export const adapter: EntityAdapter<Smoothie> = createEntityAdapter<Smoothie>();
export const initialState: SmoothiesState = adapter.getInitialState({
  selectedSmoothieId: null,
  loading: false
});

export function smoothiesReducer(state = initialState, action: SmoothiesActions): SmoothiesState {
  switch (action.type) {
    case SmoothiesActionTypes.SmoothieSelected: {
      return Object.assign({}, state, { selectedSmoothieId: action.payload });
    }

    case SmoothiesActionTypes.LoadSmoothies: {
      return ({ ...state, loading: true });
    }

    case SmoothiesActionTypes.SmoothiesLoaded: {
      state = {...state, loading: false};
      return adapter.addAll(action.payload, state);
    }

    case SmoothiesActionTypes.AddSmoothie: {
        return ({ ...state, loading: true });
      }

    case SmoothiesActionTypes.SmoothieAdded: {
      state = {...state, loading: false};
      return adapter.addOne(action.payload, state);
    }

    case SmoothiesActionTypes.UpdateSmoothie: {
        return ({ ...state, loading: true });
      }

    case SmoothiesActionTypes.SmoothieUpdated: {
        state = {...state, loading: false};
      return adapter.upsertOne(action.payload, state);
    }

    case SmoothiesActionTypes.DeleteSmoothie: {
        return ({ ...state, loading: true });
      }

    case SmoothiesActionTypes.SmoothieDeleted: {
      state = {...state, loading: false};
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedSmoothieId = (state: SmoothiesState) => state.selectedSmoothieId;

export const isLoading = (state: SmoothiesState) => state.loading;

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectSmoothieIds = selectIds;

export const selectSmoothieEntities = selectEntities;

export const selectAllSmoothies = selectAll;

export const selectSmoothieTotal = selectTotal;
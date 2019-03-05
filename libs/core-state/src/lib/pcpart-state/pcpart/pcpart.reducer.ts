import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Pcpart } from '@workspace/core-data';

import { PcpartsActions, PcpartsActionTypes } from './pcpart.actions';

export interface PcpartsState extends EntityState<Pcpart> {
  selectedPcpartId: string | null;
  loading: boolean;
}

export const adapter: EntityAdapter<Pcpart> = createEntityAdapter<Pcpart>();
export const initialState: PcpartsState = adapter.getInitialState({
  selectedPcpartId: null,
  loading: false
});

export function pcpartsReducer(state = initialState, action: PcpartsActions): PcpartsState {
  switch (action.type) {
    case PcpartsActionTypes.PcpartSelected: {
      return Object.assign({}, state, { selectedPcpartId: action.payload });
    }

    case PcpartsActionTypes.LoadPcparts: {
      return ({ ...state, loading: true });
    }

    case PcpartsActionTypes.PcpartsLoaded: {
      state = {...state, loading: false};
      return adapter.addAll(action.payload, state);
    }

    case PcpartsActionTypes.AddPcpart: {
        return ({ ...state, loading: true });
      }

    case PcpartsActionTypes.PcpartAdded: {
      state = {...state, loading: false};
      return adapter.addOne(action.payload, state);
    }

    case PcpartsActionTypes.UpdatePcpart: {
        return ({ ...state, loading: true });
      }

    case PcpartsActionTypes.PcpartUpdated: {
        state = {...state, loading: false};
      return adapter.upsertOne(action.payload, state);
    }

    case PcpartsActionTypes.DeletePcpart: {
        return ({ ...state, loading: true });
      }

    case PcpartsActionTypes.PcpartDeleted: {
      state = {...state, loading: false};
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedPcpartId = (state: PcpartsState) => state.selectedPcpartId;

export const isLoading = (state: PcpartsState) => state.loading;

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectPcpartIds = selectIds;

export const selectPcpartEntities = selectEntities;

export const selectAllPcparts = selectAll;

export const selectPcpartTotal = selectTotal;
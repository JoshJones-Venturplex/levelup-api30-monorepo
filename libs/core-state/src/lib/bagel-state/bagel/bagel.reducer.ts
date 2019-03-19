import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Bagel } from '@workspace/core-data';

import { BagelsActions, BagelsActionTypes } from './bagel.actions';

export interface BagelsState extends EntityState<Bagel> {
  selectedBagelId: string | null;
  loading: boolean;
}

export const adapter: EntityAdapter<Bagel> = createEntityAdapter<Bagel>();
export const initialState: BagelsState = adapter.getInitialState({
  selectedBagelId: null,
  loading: false
});

export function bagelsReducer(state = initialState, action: BagelsActions): BagelsState {
  switch (action.type) {
    case BagelsActionTypes.BagelSelected: {
      return Object.assign({}, state, { selectedBagelId: action.payload });
    }

    case BagelsActionTypes.LoadBagels: {
      return ({ ...state, loading: true });
    }

    case BagelsActionTypes.BagelsLoaded: {
      state = {...state, loading: false};
      return adapter.addAll(action.payload, state);
    }

    case BagelsActionTypes.AddBagel: {
        return ({ ...state, loading: true });
      }

    case BagelsActionTypes.BagelAdded: {
      state = {...state, loading: false};
      return adapter.addOne(action.payload, state);
    }

    case BagelsActionTypes.UpdateBagel: {
        return ({ ...state, loading: true });
      }

    case BagelsActionTypes.BagelUpdated: {
        state = {...state, loading: false};
      return adapter.upsertOne(action.payload, state);
    }

    case BagelsActionTypes.DeleteBagel: {
        return ({ ...state, loading: true });
      }

    case BagelsActionTypes.BagelDeleted: {
      state = {...state, loading: false};
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedBagelId = (state: BagelsState) => state.selectedBagelId;

export const isLoading = (state: BagelsState) => state.loading;

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectBagelIds = selectIds;

export const selectBagelEntities = selectEntities;

export const selectAllBagels = selectAll;

export const selectBagelTotal = selectTotal;
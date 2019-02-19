import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Burger } from '@workspace/core-data';

import { BurgersActions, BurgersActionTypes } from './burger.actions';

export interface BurgersState extends EntityState<Burger> {
  selectedBurgerId: string | null;
}

export const adapter: EntityAdapter<Burger> = createEntityAdapter<Burger>();
export const initialState: BurgersState = adapter.getInitialState({
  selectedBurgerId: null,
});

export function burgersReducer(state = initialState, action: BurgersActions): BurgersState {
  switch (action.type) {
    case BurgersActionTypes.BurgerSelected: {
      return Object.assign({}, state, { selectedBurgerId: action.payload });
    }

    case BurgersActionTypes.BurgersLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case BurgersActionTypes.BurgerAdded: {
      return adapter.addOne(action.payload, state);
    }

    case BurgersActionTypes.BurgerUpdated: {
      return adapter.upsertOne(action.payload, state);
    }

    case BurgersActionTypes.BurgerDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedBurgerId = (state: BurgersState) => state.selectedBurgerId;

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectBurgerIds = selectIds;

export const selectBurgerEntities = selectEntities;

export const selectAllBurgers = selectAll;

export const selectBurgerTotal = selectTotal;
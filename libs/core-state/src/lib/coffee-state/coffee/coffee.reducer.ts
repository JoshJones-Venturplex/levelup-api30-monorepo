import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Coffee } from '@workspace/core-data';

import { CoffeesActions, CoffeesActionTypes } from './coffee.actions';

export interface CoffeesState extends EntityState<Coffee> {
  selectedCoffeeId: string | null;
  loading: boolean;
}

export const adapter: EntityAdapter<Coffee> = createEntityAdapter<Coffee>();
export const initialState: CoffeesState = adapter.getInitialState({
  selectedCoffeeId: null,
  loading: false
});

export function coffeesReducer(state = initialState, action: CoffeesActions): CoffeesState {
  switch (action.type) {
    case CoffeesActionTypes.CoffeeSelected: {
      return Object.assign({}, state, { selectedCoffeeId: action.payload });
    }

    case CoffeesActionTypes.LoadCoffees: {
      return ({ ...state, loading: true });
    }

    case CoffeesActionTypes.CoffeesLoaded: {
      state = {...state, loading: false};
      return adapter.addAll(action.payload, state);
    }

    case CoffeesActionTypes.AddCoffee: {
        return ({ ...state, loading: true });
      }

    case CoffeesActionTypes.CoffeeAdded: {
      state = {...state, loading: false};
      return adapter.addOne(action.payload, state);
    }

    case CoffeesActionTypes.UpdateCoffee: {
        return ({ ...state, loading: true });
      }

    case CoffeesActionTypes.CoffeeUpdated: {
        state = {...state, loading: false};
      return adapter.upsertOne(action.payload, state);
    }

    case CoffeesActionTypes.DeleteCoffee: {
        return ({ ...state, loading: true });
      }

    case CoffeesActionTypes.CoffeeDeleted: {
      state = {...state, loading: false};
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedCoffeeId = (state: CoffeesState) => state.selectedCoffeeId;

export const isLoading = (state: CoffeesState) => state.loading;

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectCoffeeIds = selectIds;

export const selectCoffeeEntities = selectEntities;

export const selectAllCoffees = selectAll;

export const selectCoffeeTotal = selectTotal;
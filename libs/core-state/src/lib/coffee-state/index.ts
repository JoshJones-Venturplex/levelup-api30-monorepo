import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromCoffee from './coffee/coffee.reducer';

import { Coffee } from '@workspace/core-data';

export interface AppState {
  coffees: fromCoffee.CoffeesState;
}

export const reducers: ActionReducerMap<AppState> = {
  coffees: fromCoffee.coffeesReducer
};

export const selectCoffeeState = createFeatureSelector<fromCoffee.CoffeesState>('coffees');

export const isCoffeeLoading = createSelector(
    selectCoffeeState,
    fromCoffee.isLoading
);

export const selectCoffeeIds = createSelector(
  selectCoffeeState,
  fromCoffee.selectCoffeeIds
);

export const selectCoffeeEntities = createSelector(
  selectCoffeeState,
  fromCoffee.selectCoffeeEntities
);

export const selectAllCoffees = createSelector(
  selectCoffeeState,
  fromCoffee.selectAllCoffees
);

export const selectCurrentCoffeeId = createSelector(
  selectCoffeeState,
  fromCoffee.getSelectedCoffeeId
);

const emptyCoffee: Coffee = {
  id: null,
  flavor: '',
  type: '',
  style: '',
  size: ''
};

export const selectCurrentCoffee = createSelector(
  selectCoffeeEntities,
  selectCurrentCoffeeId,
  (coffeeEntities, coffeeId) => {
    return coffeeId ? coffeeEntities[coffeeId] : emptyCoffee;
  }
);

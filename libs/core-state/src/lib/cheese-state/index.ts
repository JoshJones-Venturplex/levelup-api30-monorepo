import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCheese from './cheese/cheese.reducer';

import { Cheese } from '@workspace/core-data';

export interface AppState {
  cheeses: fromCheese.CheesesState
}

export const reducers: ActionReducerMap<AppState> = {
  cheeses: fromCheese.cheesesReducer
};

export const selectCheesesState = createFeatureSelector<fromCheese.CheesesState>('cheeses');

export const selectCheeseIds = createSelector(
  selectCheesesState,
  fromCheese.selectCheeseIds
);
export const selectCheeseEntities = createSelector(
  selectCheesesState,
  fromCheese.selectCheeseEntities
);
export const selectAllCheeses = createSelector(
  selectCheesesState,
  fromCheese.selectAllCheeses
);
export const selectCurrentCheeseId = createSelector(
  selectCheesesState,
  fromCheese.getSelectedCheeseId
);

const emptyCheese: Cheese = {
    id: null,
    name: '',
    origin: '',
    calories: null,
    carbs: null
}

export const selectCurrentCheese = createSelector(
  selectCheeseEntities,
  selectCurrentCheeseId,
  (cheeseEntities, cheeseId) => {
    return cheeseId ? cheeseEntities[cheeseId] : emptyCheese;
  }
);
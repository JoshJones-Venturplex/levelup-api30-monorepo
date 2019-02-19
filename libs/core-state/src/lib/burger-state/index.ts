import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromBurgers from './burger/burger.reducer';

import { Burger } from '@workspace/core-data';

export interface AppState {
  burgers: fromBurgers.BurgersState
}

export const reducers: ActionReducerMap<AppState> = {
  burgers: fromBurgers.burgersReducer
};

export const selectBurgersState = createFeatureSelector<fromBurgers.BurgersState>('burgers');

export const selectBurgerIds = createSelector(
  selectBurgersState,
  fromBurgers.selectBurgerIds
);
export const selectBurgerEntities = createSelector(
  selectBurgersState,
  fromBurgers.selectBurgerEntities
);
export const selectAllBurgers = createSelector(
  selectBurgersState,
  fromBurgers.selectAllBurgers
);
export const selectCurrentBurgerId = createSelector(
  selectBurgersState,
  fromBurgers.getSelectedBurgerId
);

const emptyBurger: Burger = {
    id: null,
    name: '',
    calories: null,
    protein: null,
    carbs: null
}

export const selectCurrentBurger = createSelector(
  selectBurgerEntities,
  selectCurrentBurgerId,
  (burgerEntities, burgerId) => {
    return burgerId ? burgerEntities[burgerId] : emptyBurger;
  }
);
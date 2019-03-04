import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromSmoothie from './smoothie/smoothie.reducer';

import { Smoothie } from '@workspace/core-data';

export interface AppState {
  smoothies: fromSmoothie.SmoothiesState;
}

export const reducers: ActionReducerMap<AppState> = {
  smoothies: fromSmoothie.smoothiesReducer
};

export const selectSmoothieState = createFeatureSelector<fromSmoothie.SmoothiesState>('smoothies');

export const isSmoothieLoading = createSelector(
    selectSmoothieState,
    fromSmoothie.isLoading
);

export const selectSmoothieIds = createSelector(
  selectSmoothieState,
  fromSmoothie.selectSmoothieIds
);

export const selectSmoothieEntities = createSelector(
  selectSmoothieState,
  fromSmoothie.selectSmoothieEntities
);

export const selectAllSmoothies = createSelector(
  selectSmoothieState,
  fromSmoothie.selectAllSmoothies
);

export const selectCurrentSmoothieId = createSelector(
  selectSmoothieState,
  fromSmoothie.getSelectedSmoothieId
);

const emptySmoothie: Smoothie = {
  id: null,
  flavor: '',
  mixin: '',
  calories: null,
  size: ''
};

export const selectCurrentSmoothie = createSelector(
  selectSmoothieEntities,
  selectCurrentSmoothieId,
  (smoothieEntities, smoothieId) => {
    return smoothieId ? smoothieEntities[smoothieId] : emptySmoothie;
  }
);

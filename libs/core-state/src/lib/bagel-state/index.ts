import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromBagel from './bagel/bagel.reducer';

import { Bagel } from '@workspace/core-data';

export interface AppState {
  bagels: fromBagel.BagelsState;
}

export const reducers: ActionReducerMap<AppState> = {
  bagels: fromBagel.bagelsReducer
};

export const selectBagelState = createFeatureSelector<fromBagel.BagelsState>('bagels');

export const isBagelLoading = createSelector(
    selectBagelState,
    fromBagel.isLoading
);

export const selectBagelIds = createSelector(
  selectBagelState,
  fromBagel.selectBagelIds
);

export const selectBagelEntities = createSelector(
  selectBagelState,
  fromBagel.selectBagelEntities
);

export const selectAllBagels = createSelector(
  selectBagelState,
  fromBagel.selectAllBagels
);

export const selectCurrentBagelId = createSelector(
  selectBagelState,
  fromBagel.getSelectedBagelId
);

const emptyBagel: Bagel = {
  id: null,
  flavor: '',
  spread: '',
  addons: '',
  toasted: null,
  calories: null
};

export const selectCurrentBagel = createSelector(
  selectBagelEntities,
  selectCurrentBagelId,
  (bagelEntities, bagelId) => {
    return bagelId ? bagelEntities[bagelId] : emptyBagel;
  }
);

import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromDev from './dev/dev.reducer';

import { Dev } from '@workspace/core-data';

export interface AppState {
  devs: fromDev.DevsState;
}

export const reducers: ActionReducerMap<AppState> = {
  devs: fromDev.devsReducer
};

export const selectDevState = createFeatureSelector<fromDev.DevsState>('devs');

export const isDevLoading = createSelector(
    selectDevState,
    fromDev.isLoading
);

export const selectDevIds = createSelector(
  selectDevState,
  fromDev.selectDevIds
);

export const selectDevEntities = createSelector(
  selectDevState,
  fromDev.selectDevEntities
);

export const selectAllDevs = createSelector(
  selectDevState,
  fromDev.selectAllDevs
);

export const selectCurrentDevId = createSelector(
  selectDevState,
  fromDev.getSelectedDevId
);

const emptyDev: Dev = {
  id: null,
  firstName: '',
  lastName: null,
  status: ''
};

export const selectCurrentDev = createSelector(
  selectDevEntities,
  selectCurrentDevId,
  (devEntities, devId) => {
    return devId ? devEntities[devId] : emptyDev;
  }
);

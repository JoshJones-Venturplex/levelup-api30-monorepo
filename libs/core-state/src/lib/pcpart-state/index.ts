import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromPcpart from './pcpart/pcpart.reducer';

import { Pcpart } from '@workspace/core-data';

export interface AppState {
  pcparts: fromPcpart.PcpartsState;
}

export const reducers: ActionReducerMap<AppState> = {
  pcparts: fromPcpart.pcpartsReducer
};

export const selectPcpartState = createFeatureSelector<fromPcpart.PcpartsState>('pcparts');

export const isPcpartLoading = createSelector(
    selectPcpartState,
    fromPcpart.isLoading
);

export const selectPcpartIds = createSelector(
  selectPcpartState,
  fromPcpart.selectPcpartIds
);

export const selectPcpartEntities = createSelector(
  selectPcpartState,
  fromPcpart.selectPcpartEntities
);

export const selectAllPcparts = createSelector(
  selectPcpartState,
  fromPcpart.selectAllPcparts
);

export const selectCurrentPcpartId = createSelector(
  selectPcpartState,
  fromPcpart.getSelectedPcpartId
);

const emptyPcpart: Pcpart = {
  id: null,
  name: '',
  type: '',
  release_year: ''
};

export const selectCurrentPcpart = createSelector(
  selectPcpartEntities,
  selectCurrentPcpartId,
  (pcpartEntities, pcpartId) => {
    return pcpartId ? pcpartEntities[pcpartId] : emptyPcpart;
  }
);

import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAmiibo from './amiibo/amiibo.reducer';

import { Amiibo } from '@workspace/core-data';

export interface AppState {
    amiibos: fromAmiibo.AmiiboState
}

export const reducers: ActionReducerMap<AppState> = {
    amiibos: fromAmiibo.amiiboReducer
}

export const selectAmiiboState = createFeatureSelector<fromAmiibo.AmiiboState>('amiibos');

export const selectAmiiboIds = createSelector(
    selectAmiiboState,
    fromAmiibo.selectAmiiboIds
  );
  export const selectAmiiboEntities = createSelector(
    selectAmiiboState,
    fromAmiibo.selectAmiiboEntities
  );
  export const selectAllAmiibos = createSelector(
    selectAmiiboState,
    fromAmiibo.selectAllAmiibos
  );
  export const selectCurrentAmiiboId = createSelector(
    selectAmiiboState,
    fromAmiibo.getSelectedAmiiboId
  );
  
  const emptyAmiibo: Amiibo = {
    amiiboSeries: '',
    character: '',
    gameSeries: '',
    head: '',
    image: '',
    name: '',
    release: null,
    tail: '',
    type: ''
}
  
  export const selectCurrentAmiibo = createSelector(
    selectAmiiboEntities,
    selectCurrentAmiiboId,
    (amiiboEntities, amiiboId) => {
      return amiiboId ? amiiboEntities[amiiboId] : emptyAmiibo;
    }
  );
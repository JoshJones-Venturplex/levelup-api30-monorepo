import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromTaco from './taco/taco.reducer';

import { Taco } from '@workspace/core-data';

export interface AppState {
    tacos: fromTaco.TacoState
}

export const reducers: ActionReducerMap<AppState> = {
    tacos: fromTaco.tacoReducer
}

export const selectTacoState = createFeatureSelector<fromTaco.TacoState>('tacos');

export const selectTacoIds = createSelector(
    selectTacoState,
    fromTaco.selectTacoIds
  );
  export const selectTacoEntities = createSelector(
    selectTacoState,
    fromTaco.selectTacoEntities
  );
  export const selectAllTacos = createSelector(
    selectTacoState,
    fromTaco.selectAllTacos
  );
  export const selectCurrentTacoId = createSelector(
    selectTacoState,
    fromTaco.getSelectedTacoId
  );
  
  const emptyTaco: Taco = {
      id: null,
      name: '',
      calories: null,
      protein: '',
      salsa: ''
  }
  
  export const selectCurrentTaco = createSelector(
    selectTacoEntities,
    selectCurrentTacoId,
    (tacoEntities, tacoId) => {
      return tacoId ? tacoEntities[tacoId] : emptyTaco;
    }
  );
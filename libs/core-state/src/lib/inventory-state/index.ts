import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromItem from './item/item.reducer';

import { Item } from '@workspace/core-data';

export interface AppState {
  items: fromItem.ItemsState;
}

export const reducers: ActionReducerMap<AppState> = {
  items: fromItem.itemsReducer
};

export const selectItemState = createFeatureSelector<fromItem.ItemsState>('items');

export const isItemLoading = createSelector(
    selectItemState,
    fromItem.isLoading
);

export const selectItemIds = createSelector(
  selectItemState,
  fromItem.selectItemIds
);

export const selectItemEntities = createSelector(
  selectItemState,
  fromItem.selectItemEntities
);

export const selectAllItems = createSelector(
  selectItemState,
  fromItem.selectAllItems
);

export const selectCurrentItemId = createSelector(
  selectItemState,
  fromItem.getSelectedItemId
);

const emptyItem: Item = {
  id: null,
  name: '',
  status: ''
};

export const selectCurrentItem = createSelector(
  selectItemEntities,
  selectCurrentItemId,
  (itemEntities, itemId) => {
    return itemId ? itemEntities[itemId] : emptyItem;
  }
);

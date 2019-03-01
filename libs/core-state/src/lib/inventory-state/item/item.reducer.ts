import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Item } from '@workspace/core-data';

import { ItemsActions, ItemsActionTypes } from './item.actions';

export interface ItemsState extends EntityState<Item> {
  selectedItemId: string | null;
  loading: boolean;
}

export const adapter: EntityAdapter<Item> = createEntityAdapter<Item>();
export const initialState: ItemsState = adapter.getInitialState({
  selectedItemId: null,
  loading: false
});

export function itemsReducer(state = initialState, action: ItemsActions): ItemsState {
  switch (action.type) {
    case ItemsActionTypes.ItemSelected: {
      return Object.assign({}, state, { selectedItemId: action.payload });
    }

    case ItemsActionTypes.LoadItems: {
      return ({ ...state, loading: true });
    }

    case ItemsActionTypes.ItemsLoaded: {
      state = {...state, loading: false};
      return adapter.addAll(action.payload, state);
    }

    case ItemsActionTypes.AddItem: {
        return ({ ...state, loading: true });
      }

    case ItemsActionTypes.ItemAdded: {
      state = {...state, loading: false};
      return adapter.addOne(action.payload, state);
    }

    case ItemsActionTypes.UpdateItem: {
        return ({ ...state, loading: true });
      }

    case ItemsActionTypes.ItemUpdated: {
        state = {...state, loading: false};
      return adapter.upsertOne(action.payload, state);
    }

    case ItemsActionTypes.DeleteItem: {
        return ({ ...state, loading: true });
      }

    case ItemsActionTypes.ItemDeleted: {
      state = {...state, loading: false};
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedItemId = (state: ItemsState) => state.selectedItemId;

export const isLoading = (state: ItemsState) => state.loading;

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectItemIds = selectIds;

export const selectItemEntities = selectEntities;

export const selectAllItems = selectAll;

export const selectItemTotal = selectTotal;
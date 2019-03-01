import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { Item } from '@workspace/core-data';
import { InventoryService } from '@workspace/core-data';

import {
  AddItem,
  DeleteItem,
  ItemAdded,
  ItemDeleted,
  ItemsActionTypes,
  ItemsLoaded,
  ItemUpdated,
  LoadItems,
  UpdateItem,
} from './item.actions';
import { ItemsState } from './item.reducer';

@Injectable({providedIn: 'root'})
export class ItemsEffects {

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ItemsState>,
    private inventoryService: InventoryService
  ) {}
  
  @Effect() effect$ = this.actions$.pipe(ofType(ItemsActionTypes.ItemsAction));

  @Effect()
  loadItems$ = this.dataPersistence.fetch(ItemsActionTypes.LoadItems, {
    run: (action: LoadItems, state: ItemsState) => {
      return this.inventoryService.getItems().pipe(map((res: Item[]) => new ItemsLoaded(res)))
    },

    onError: (action: LoadItems, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  addItem$ = this.dataPersistence.pessimisticUpdate(ItemsActionTypes.AddItem, {
    run: (action: AddItem, state: ItemsState) => {
      return this.inventoryService.createItem(action.payload).pipe(map((res: Item) => new ItemAdded(res)))
    },

    onError: (action: AddItem, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  updateItem$ = this.dataPersistence.pessimisticUpdate(ItemsActionTypes.UpdateItem, {
    run: (action: UpdateItem, state: ItemsState) => {
      return this.inventoryService.updateItem(action.payload).pipe(map((res: Item) => new ItemUpdated(res)))
    },

    onError: (action: UpdateItem, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  deleteItem$ = this.dataPersistence.pessimisticUpdate(ItemsActionTypes.DeleteItem, {
    run: (action: DeleteItem, state: ItemsState) => {
      return this.inventoryService.deleteItem(action.payload).pipe(map(_ => new ItemDeleted(action.payload)))
    },

    onError: (action: DeleteItem, error) => {
      console.error('Error', error);
    }
  });
}
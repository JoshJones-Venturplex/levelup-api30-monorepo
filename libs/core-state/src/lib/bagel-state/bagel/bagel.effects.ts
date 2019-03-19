import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { Bagel } from '@workspace/core-data';
import { BagelService } from '@workspace/core-data';

import {
  AddBagel,
  DeleteBagel,
  BagelAdded,
  BagelDeleted,
  BagelsActionTypes,
  BagelsLoaded,
  BagelUpdated,
  LoadBagels,
  UpdateBagel,
} from './bagel.actions';
import { BagelsState } from './bagel.reducer';

@Injectable({providedIn: 'root'})
export class BagelsEffects {

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<BagelsState>,
    private bagelService: BagelService
  ) {}
  
  @Effect() effect$ = this.actions$.pipe(ofType(BagelsActionTypes.BagelsAction));

  @Effect()
  loadBagels$ = this.dataPersistence.fetch(BagelsActionTypes.LoadBagels, {
    run: (action: LoadBagels, state: BagelsState) => {
      return this.bagelService.getBagels().pipe(map((res: Bagel[]) => new BagelsLoaded(res)))
    },

    onError: (action: LoadBagels, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  addBagel$ = this.dataPersistence.pessimisticUpdate(BagelsActionTypes.AddBagel, {
    run: (action: AddBagel, state: BagelsState) => {
      return this.bagelService.createBagel(action.payload).pipe(map((res: Bagel) => new BagelAdded(res)))
    },

    onError: (action: AddBagel, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  updateBagel$ = this.dataPersistence.pessimisticUpdate(BagelsActionTypes.UpdateBagel, {
    run: (action: UpdateBagel, state: BagelsState) => {
      return this.bagelService.updateBagel(action.payload).pipe(map((res: Bagel) => new BagelUpdated(res)))
    },

    onError: (action: UpdateBagel, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  deleteBagel$ = this.dataPersistence.pessimisticUpdate(BagelsActionTypes.DeleteBagel, {
    run: (action: DeleteBagel, state: BagelsState) => {
      return this.bagelService.deleteBagel(action.payload).pipe(map(_ => new BagelDeleted(action.payload)))
    },

    onError: (action: DeleteBagel, error) => {
      console.error('Error', error);
    }
  });
}
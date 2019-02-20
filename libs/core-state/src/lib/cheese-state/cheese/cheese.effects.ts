import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { Cheese } from '@workspace/core-data';
import { CheeseService } from '@workspace/core-data';

import {
  AddCheese,
  DeleteCheese,
  CheeseAdded,
  CheeseDeleted,
  CheesesActionTypes,
  CheesesLoaded,
  CheeseUpdated,
  LoadCheeses,
  UpdateCheese,
} from './cheese.actions';
import { CheesesState } from './cheese.reducer';

@Injectable({providedIn: 'root'})
export class CheesesEffects {

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CheesesState>,
    private cheesesService: CheeseService
  ) {}
  
  @Effect() effect$ = this.actions$.pipe(ofType(CheesesActionTypes.CheesesAction));

  @Effect()
  loadCheeses$ = this.dataPersistence.fetch(CheesesActionTypes.LoadCheeses, {
    run: (action: LoadCheeses, state: CheesesState) => {
      return this.cheesesService.getCheeses().pipe(map((res: Cheese[]) => new CheesesLoaded(res)))
    },

    onError: (action: LoadCheeses, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  addCheese$ = this.dataPersistence.pessimisticUpdate(CheesesActionTypes.AddCheese, {
    run: (action: AddCheese, state: CheesesState) => {
      return this.cheesesService.createCheese(action.payload).pipe(map((res: Cheese) => new CheeseAdded(res)))
    },

    onError: (action: AddCheese, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  updateCheese$ = this.dataPersistence.pessimisticUpdate(CheesesActionTypes.UpdateCheese, {
    run: (action: UpdateCheese, state: CheesesState) => {
      return this.cheesesService.updateCheese(action.payload).pipe(map((res: Cheese) => new CheeseUpdated(res)))
    },

    onError: (action: UpdateCheese, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  deleteCheese$ = this.dataPersistence.pessimisticUpdate(CheesesActionTypes.DeleteCheese, {
    run: (action: DeleteCheese, state: CheesesState) => {
      return this.cheesesService.deleteCheese(action.payload).pipe(map(_ => new CheeseDeleted(action.payload)))
    },

    onError: (action: DeleteCheese, error) => {
      console.error('Error', error);
    }
  });
}
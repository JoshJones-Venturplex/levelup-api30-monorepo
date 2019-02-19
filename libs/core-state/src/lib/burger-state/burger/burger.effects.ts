import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { Burger } from '@workspace/core-data';
import { BurgerService } from '@workspace/core-data';

import {
  AddBurger,
  DeleteBurger,
  BurgerAdded,
  BurgerDeleted,
  BurgersActionTypes,
  BurgersLoaded,
  BurgerUpdated,
  LoadBurgers,
  UpdateBurger,
} from './burger.actions';
import { BurgersState } from './burger.reducer';

@Injectable({providedIn: 'root'})
export class BurgersEffects {

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<BurgersState>,
    private burgersService: BurgerService
  ) {}
  
  @Effect() effect$ = this.actions$.pipe(ofType(BurgersActionTypes.BurgersAction));

  @Effect()
  loadBurgers$ = this.dataPersistence.fetch(BurgersActionTypes.LoadBurgers, {
    run: (action: LoadBurgers, state: BurgersState) => {
      return this.burgersService.getBurgers().pipe(map((res: Burger[]) => new BurgersLoaded(res)))
    },

    onError: (action: LoadBurgers, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  addBurger$ = this.dataPersistence.pessimisticUpdate(BurgersActionTypes.AddBurger, {
    run: (action: AddBurger, state: BurgersState) => {
      return this.burgersService.createBurger(action.payload).pipe(map((res: Burger) => new BurgerAdded(res)))
    },

    onError: (action: AddBurger, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  updateBurger$ = this.dataPersistence.pessimisticUpdate(BurgersActionTypes.UpdateBurger, {
    run: (action: UpdateBurger, state: BurgersState) => {
      return this.burgersService.updateBurger(action.payload).pipe(map((res: Burger) => new BurgerUpdated(res)))
    },

    onError: (action: UpdateBurger, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  deleteBurger$ = this.dataPersistence.pessimisticUpdate(BurgersActionTypes.DeleteBurger, {
    run: (action: DeleteBurger, state: BurgersState) => {
      return this.burgersService.deleteBurger(action.payload).pipe(map(_ => new BurgerDeleted(action.payload)))
    },

    onError: (action: DeleteBurger, error) => {
      console.error('Error', error);
    }
  });
}
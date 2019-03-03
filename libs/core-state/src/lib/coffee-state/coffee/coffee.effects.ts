import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { Coffee } from '@workspace/core-data';
import { CoffeeService } from '@workspace/core-data';

import {
  AddCoffee,
  DeleteCoffee,
  CoffeeAdded,
  CoffeeDeleted,
  CoffeesActionTypes,
  CoffeesLoaded,
  CoffeeUpdated,
  LoadCoffees,
  UpdateCoffee,
} from './coffee.actions';
import { CoffeesState } from './coffee.reducer';

@Injectable({providedIn: 'root'})
export class CoffeesEffects {

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CoffeesState>,
    private coffeeService: CoffeeService
  ) {}
  
  @Effect() effect$ = this.actions$.pipe(ofType(CoffeesActionTypes.CoffeesAction));

  @Effect()
  loadCoffees$ = this.dataPersistence.fetch(CoffeesActionTypes.LoadCoffees, {
    run: (action: LoadCoffees, state: CoffeesState) => {
      return this.coffeeService.getCoffees().pipe(map((res: Coffee[]) => new CoffeesLoaded(res)))
    },

    onError: (action: LoadCoffees, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  addCoffee$ = this.dataPersistence.pessimisticUpdate(CoffeesActionTypes.AddCoffee, {
    run: (action: AddCoffee, state: CoffeesState) => {
      return this.coffeeService.createCoffee(action.payload).pipe(map((res: Coffee) => new CoffeeAdded(res)))
    },

    onError: (action: AddCoffee, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  updateCoffee$ = this.dataPersistence.pessimisticUpdate(CoffeesActionTypes.UpdateCoffee, {
    run: (action: UpdateCoffee, state: CoffeesState) => {
      return this.coffeeService.updateCoffee(action.payload).pipe(map((res: Coffee) => new CoffeeUpdated(res)))
    },

    onError: (action: UpdateCoffee, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  deleteCoffee$ = this.dataPersistence.pessimisticUpdate(CoffeesActionTypes.DeleteCoffee, {
    run: (action: DeleteCoffee, state: CoffeesState) => {
      return this.coffeeService.deleteCoffee(action.payload).pipe(map(_ => new CoffeeDeleted(action.payload)))
    },

    onError: (action: DeleteCoffee, error) => {
      console.error('Error', error);
    }
  });
}
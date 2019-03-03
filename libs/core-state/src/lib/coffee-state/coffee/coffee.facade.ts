import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { selectAllCoffees, selectCurrentCoffee, isCoffeeLoading } from '..';
import { CoffeesActionTypes } from './coffee.actions';
import * as CoffeesActions from './coffee.actions';
import { CoffeesState } from './coffee.reducer';

@Injectable({
  providedIn: 'root'
})
export class CoffeesFacade {
  allCoffees$ = this.store.pipe(select(selectAllCoffees));
  currentCoffee$ = this.store.pipe(select(selectCurrentCoffee));
  loading$ = this.store.pipe(select(isCoffeeLoading));

  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === CoffeesActionTypes.AddCoffee
        || action.type === CoffeesActionTypes.UpdateCoffee
        || action.type === CoffeesActionTypes.DeleteCoffee
      )
    );

  constructor(private store: Store<CoffeesState>, private actions$: ActionsSubject) {}

  selectCoffee(coffeeId) {
    this.store.dispatch(new CoffeesActions.CoffeeSelected(coffeeId));
  }

  loadCoffees() {
    this.store.dispatch(new CoffeesActions.LoadCoffees());
  }

  addCoffee(coffee) {
    this.store.dispatch(new CoffeesActions.AddCoffee(coffee));
  }

  updateCoffee(coffee) {
    this.store.dispatch(new CoffeesActions.UpdateCoffee(coffee));
  }

  deleteCoffee(coffee) {
    this.store.dispatch(new CoffeesActions.DeleteCoffee(coffee));
  }
}
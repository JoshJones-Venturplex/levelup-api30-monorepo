import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { selectAllBurgers, selectCurrentBurger } from '..';
import { BurgersActionTypes } from './burger.actions';
import * as BurgersActions from './burger.actions';
import { BurgersState } from './burger.reducer';

@Injectable({
  providedIn: 'root'
})
export class BurgersFacade {
  allBurgers$ = this.store.pipe(select(selectAllBurgers));
  currentBurger$ = this.store.pipe(select(selectCurrentBurger));

  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === BurgersActionTypes.AddBurger
        || action.type === BurgersActionTypes.UpdateBurger
        || action.type === BurgersActionTypes.DeleteBurger
      )
    );

  constructor(private store: Store<BurgersState>, private actions$: ActionsSubject) {}

  selectBurger(itemId) {
    this.store.dispatch(new BurgersActions.BurgerSelected(itemId));
  }

  loadBurgers() {
    this.store.dispatch(new BurgersActions.LoadBurgers());
  }

  addBurger(item) {
    this.store.dispatch(new BurgersActions.AddBurger(item));
  }

  updateBurger(item) {
    this.store.dispatch(new BurgersActions.UpdateBurger(item));
  }

  deleteBurger(item) {
    this.store.dispatch(new BurgersActions.DeleteBurger(item));
  }
}
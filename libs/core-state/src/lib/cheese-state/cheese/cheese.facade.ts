import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { selectAllCheeses, selectCurrentCheese } from '..';
import { CheesesActionTypes } from './cheese.actions';
import * as CheesesActions from './cheese.actions';
import { CheesesState } from './cheese.reducer';

@Injectable({
  providedIn: 'root'
})
export class CheesesFacade {
  allCheeses$ = this.store.pipe(select(selectAllCheeses));
  currentCheese$ = this.store.pipe(select(selectCurrentCheese));

  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === CheesesActionTypes.AddCheese
        || action.type === CheesesActionTypes.UpdateCheese
        || action.type === CheesesActionTypes.DeleteCheese
      )
    );

  constructor(private store: Store<CheesesState>, private actions$: ActionsSubject) {}

  selectCheese(itemId) {
    this.store.dispatch(new CheesesActions.CheeseSelected(itemId));
  }

  loadCheeses() {
    this.store.dispatch(new CheesesActions.LoadCheeses());
  }

  addCheese(item) {
    this.store.dispatch(new CheesesActions.AddCheese(item));
  }

  updateCheese(item) {
    this.store.dispatch(new CheesesActions.UpdateCheese(item));
  }

  deleteCheese(item) {
    this.store.dispatch(new CheesesActions.DeleteCheese(item));
  }
}
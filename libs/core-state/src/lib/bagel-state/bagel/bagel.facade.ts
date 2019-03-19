import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { selectAllBagels, selectCurrentBagel, isBagelLoading } from '..';
import { BagelsActionTypes } from './bagel.actions';
import * as BagelsActions from './bagel.actions';
import { BagelsState } from './bagel.reducer';

@Injectable({
  providedIn: 'root'
})
export class BagelsFacade {
  allBagels$ = this.store.pipe(select(selectAllBagels));
  currentBagel$ = this.store.pipe(select(selectCurrentBagel));
  loading$ = this.store.pipe(select(isBagelLoading));

  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === BagelsActionTypes.AddBagel
        || action.type === BagelsActionTypes.UpdateBagel
        || action.type === BagelsActionTypes.DeleteBagel
      )
    );

  constructor(private store: Store<BagelsState>, private actions$: ActionsSubject) {}

  selectBagel(bagelId) {
    this.store.dispatch(new BagelsActions.BagelSelected(bagelId));
  }

  loadBagels() {
    this.store.dispatch(new BagelsActions.LoadBagels());
  }

  addBagel(bagel) {
    this.store.dispatch(new BagelsActions.AddBagel(bagel));
  }

  updateBagel(bagel) {
    this.store.dispatch(new BagelsActions.UpdateBagel(bagel));
  }

  deleteBagel(bagel) {
    this.store.dispatch(new BagelsActions.DeleteBagel(bagel));
  }
}
import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { selectAllDevs, selectCurrentDev, isDevLoading } from '..';
import { DevsActionTypes } from './dev.actions';
import * as DevsActions from './dev.actions';
import { DevsState } from './dev.reducer';

@Injectable({
  providedIn: 'root'
})
export class DevsFacade {
  allDevs$ = this.store.pipe(select(selectAllDevs));
  currentDev$ = this.store.pipe(select(selectCurrentDev));
  loading$ = this.store.pipe(select(isDevLoading));

  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === DevsActionTypes.AddDev
        || action.type === DevsActionTypes.UpdateDev
        || action.type === DevsActionTypes.DeleteDev
      )
    );

  constructor(private store: Store<DevsState>, private actions$: ActionsSubject) {}

  selectDev(itemId) {
    this.store.dispatch(new DevsActions.DevSelected(itemId));
  }

  loadDevs() {
    this.store.dispatch(new DevsActions.LoadDevs());
  }

  addDev(item) {
    this.store.dispatch(new DevsActions.AddDev(item));
  }

  updateDev(item) {
    this.store.dispatch(new DevsActions.UpdateDev(item));
  }

  deleteDev(item) {
    this.store.dispatch(new DevsActions.DeleteDev(item));
  }
}
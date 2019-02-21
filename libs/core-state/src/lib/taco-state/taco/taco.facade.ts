import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { selectAllTacos, selectCurrentTaco } from '..';
import { TacoActionTypes } from './taco.actions';
import * as TacoActions from './taco.actions';
import { TacoState } from './taco.reducer';

@Injectable({
  providedIn: 'root'
})
export class TacoFacade {
  allTacos$ = this.store.pipe(select(selectAllTacos));
  currentTaco$ = this.store.pipe(select(selectCurrentTaco));

  mutations$ = this.actions$.pipe(
    filter(
      action =>
        action.type === TacoActionTypes.AddTaco ||
        action.type === TacoActionTypes.UpdateTaco ||
        action.type === TacoActionTypes.DeleteTaco
    )
  );

  constructor(
    private store: Store<TacoState>,
    private actions$: ActionsSubject
  ) {}

  selectTaco(itemId) {
    this.store.dispatch(new TacoActions.TacoSelected(itemId));
  }

  loadTacos() {
    this.store.dispatch(new TacoActions.LoadTacos());
  }

  addTaco(item) {
    this.store.dispatch(new TacoActions.AddTaco(item));
  }

  updateTaco(item) {
    this.store.dispatch(new TacoActions.UpdateTaco(item));
  }

  deleteTaco(item) {
    this.store.dispatch(new TacoActions.DeleteTaco(item));
  }
}

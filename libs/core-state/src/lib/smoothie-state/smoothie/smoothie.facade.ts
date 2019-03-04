import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { selectAllSmoothies, selectCurrentSmoothie, isSmoothieLoading } from '..';
import { SmoothiesActionTypes } from './smoothie.actions';
import * as SmoothiesActions from './smoothie.actions';
import { SmoothiesState } from './smoothie.reducer';

@Injectable({
  providedIn: 'root'
})
export class SmoothiesFacade {
  allSmoothies$ = this.store.pipe(select(selectAllSmoothies));
  currentSmoothie$ = this.store.pipe(select(selectCurrentSmoothie));
  loading$ = this.store.pipe(select(isSmoothieLoading));

  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === SmoothiesActionTypes.AddSmoothie
        || action.type === SmoothiesActionTypes.UpdateSmoothie
        || action.type === SmoothiesActionTypes.DeleteSmoothie
      )
    );

  constructor(private store: Store<SmoothiesState>, private actions$: ActionsSubject) {}

  selectSmoothie(smoothieId) {
    this.store.dispatch(new SmoothiesActions.SmoothieSelected(smoothieId));
  }

  loadSmoothies() {
    this.store.dispatch(new SmoothiesActions.LoadSmoothies());
  }

  addSmoothie(smoothie) {
    this.store.dispatch(new SmoothiesActions.AddSmoothie(smoothie));
  }

  updateSmoothie(smoothie) {
    this.store.dispatch(new SmoothiesActions.UpdateSmoothie(smoothie));
  }

  deleteSmoothie(smoothie) {
    this.store.dispatch(new SmoothiesActions.DeleteSmoothie(smoothie));
  }
}
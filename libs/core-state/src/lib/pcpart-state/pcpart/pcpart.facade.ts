import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { selectAllPcparts, selectCurrentPcpart, isPcpartLoading } from '..';
import { PcpartsActionTypes } from './pcpart.actions';
import * as PcpartsActions from './pcpart.actions';
import { PcpartsState } from './pcpart.reducer';

@Injectable({
  providedIn: 'root'
})
export class PcpartsFacade {
  allPcparts$ = this.store.pipe(select(selectAllPcparts));
  currentPcpart$ = this.store.pipe(select(selectCurrentPcpart));
  loading$ = this.store.pipe(select(isPcpartLoading));

  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === PcpartsActionTypes.AddPcpart
        || action.type === PcpartsActionTypes.UpdatePcpart
        || action.type === PcpartsActionTypes.DeletePcpart
      )
    );

  constructor(private store: Store<PcpartsState>, private actions$: ActionsSubject) {}

  selectPcpart(pcpartId) {
    this.store.dispatch(new PcpartsActions.PcpartSelected(pcpartId));
  }

  loadPcparts() {
    this.store.dispatch(new PcpartsActions.LoadPcparts());
  }

  addPcpart(pcpart) {
    this.store.dispatch(new PcpartsActions.AddPcpart(pcpart));
  }

  updatePcpart(pcpart) {
    this.store.dispatch(new PcpartsActions.UpdatePcpart(pcpart));
  }

  deletePcpart(pcpart) {
    this.store.dispatch(new PcpartsActions.DeletePcpart(pcpart));
  }
}
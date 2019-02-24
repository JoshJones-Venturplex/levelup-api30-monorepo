import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { selectAllAmiibos, selectCurrentAmiibo } from '..';
import { AmiiboActionTypes } from './amiibo.actions';
import * as AmiiboActions from './amiibo.actions';
import { AmiiboState } from './amiibo.reducer';

@Injectable({
  providedIn: 'root'
})
export class AmiiboFacade {
  allAmiibos$ = this.store.pipe(select(selectAllAmiibos));
  currentAmiibo$ = this.store.pipe(select(selectCurrentAmiibo));

  constructor(
    private store: Store<AmiiboState>,
    private actions$: ActionsSubject
  ) {}

  selectAmiibo(itemId) {
    this.store.dispatch(new AmiiboActions.AmiiboSelected(itemId));
  }

  loadAmiibos() {
    this.store.dispatch(new AmiiboActions.LoadAmiibos());
  }
}

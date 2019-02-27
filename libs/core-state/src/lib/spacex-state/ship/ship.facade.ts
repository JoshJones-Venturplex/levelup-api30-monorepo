import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { selectAllShips, selectCurrentShip } from '..';
import { ShipActionTypes } from './ship.actions';
import * as ShipActions from './ship.actions';
import { ShipState } from './ship.reducer';

@Injectable({
  providedIn: 'root'
})
export class ShipFacade {
  allShips$ = this.store.pipe(select(selectAllShips));
  currentShip$ = this.store.pipe(select(selectCurrentShip));

  constructor(
    private store: Store<ShipState>,
    private actions$: ActionsSubject
  ) {}

  selectShip(itemId) {
    this.store.dispatch(new ShipActions.ShipSelected(itemId));
  }

  loadShips() {
    this.store.dispatch(new ShipActions.LoadShips());
  }
}

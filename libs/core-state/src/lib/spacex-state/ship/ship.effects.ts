import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { Ship } from '@workspace/core-data';
import { SpacexService } from '@workspace/core-data';

import {
    ShipActionTypes,
    LoadShips,
    ShipsLoaded
} from './ship.actions';
import { ShipState } from './ship.reducer';

@Injectable({providedIn: 'root'})
export class ShipEffects {

    constructor(
        private actions$: Actions,
        private dataPersistence: DataPersistence<ShipState>,
        private spacexService: SpacexService
    ) {}

    @Effect() effect$ = this.actions$.pipe(ofType(ShipActionTypes.ShipAction));

    @Effect()
    loadShips$ = this.dataPersistence.fetch(ShipActionTypes.LoadShips, {
        run: (action: LoadShips, state: ShipState) => {
            return this.spacexService.getShips().pipe(map((res: any) => new ShipsLoaded(res)))
        },

        onError: (action: LoadShips, error) => {
            console.error('Error', error);
        }
    });
}
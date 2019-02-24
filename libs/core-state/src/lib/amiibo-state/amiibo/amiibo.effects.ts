import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { Amiibo } from '@workspace/core-data';
import { AmiiboService } from '@workspace/core-data';

import {
    AmiiboActionTypes,
    LoadAmiibos,
    AmiibosLoaded
} from './amiibo.actions';
import { AmiiboState } from './amiibo.reducer';

@Injectable({providedIn: 'root'})
export class AmiiboEffects {

    constructor(
        private actions$: Actions,
        private dataPersistence: DataPersistence<AmiiboState>,
        private amiiboService: AmiiboService
    ) {}

    @Effect() effect$ = this.actions$.pipe(ofType(AmiiboActionTypes.AmiiboAction));

    @Effect()
    loadAmiibos$ = this.dataPersistence.fetch(AmiiboActionTypes.LoadAmiibos, {
        run: (action: LoadAmiibos, state: AmiiboState) => {
            return this.amiiboService.getAmiibos().pipe(map((res: any) => new AmiibosLoaded(res.amiibo)))
        },

        onError: (action: LoadAmiibos, error) => {
            console.error('Error', error);
        }
    });
}
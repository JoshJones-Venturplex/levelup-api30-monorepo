import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { Taco } from '@workspace/core-data';
import { TacoService } from '@workspace/core-data';

import {
    TacoActionTypes,
    LoadTacos,
    TacosLoaded,
    AddTaco,
    TacoAdded,
    UpdateTaco,
    TacoUpdated,
    DeleteTaco,
    TacoDeleted
} from './taco.actions';
import { TacoState } from './taco.reducer';

@Injectable({providedIn: 'root'})
export class TacoEffects {

    constructor(
        private actions$: Actions,
        private dataPersistence: DataPersistence<TacoState>,
        private tacoService: TacoService
    ) {}

    @Effect() effect$ = this.actions$.pipe(ofType(TacoActionTypes.TacoAction));

    @Effect()
    loadTacos$ = this.dataPersistence.fetch(TacoActionTypes.LoadTacos, {
        run: (action: LoadTacos, state: TacoState) => {
            return this.tacoService.getTacos().pipe(map((res: Taco[]) => new TacosLoaded(res)))
        },

        onError: (action: LoadTacos, error) => {
            console.error('Error', error);
        }
    });

    @Effect()
    addTaco$ = this.dataPersistence.pessimisticUpdate(TacoActionTypes.AddTaco, {
        run: (action: AddTaco, state: TacoState) => {
            return this.tacoService.createTaco(action.payload).pipe(map((res: Taco) => new TacoAdded(res)))
        },

        onError: (action: AddTaco, error) => {
            console.error('Error', error);
        }
    });

    @Effect()
    updateTaco$ = this.dataPersistence.pessimisticUpdate(TacoActionTypes.UpdateTaco, {
        run: (action: UpdateTaco, state: TacoState) => {
            return this.tacoService.updateTaco(action.payload).pipe(map((res) => new UpdateTaco(res)))
        },

        onError: (action: UpdateTaco, error) => {
            console.error('Error', error);
        }
    })

    @Effect()
    deleteTaco$ = this.dataPersistence.pessimisticUpdate(TacoActionTypes.DeleteTaco, {
        run: (action: DeleteTaco, state: TacoState) => {
            return this.tacoService.deleteTaco(action.payload).pipe(map(res => new TacoDeleted(action.payload)))
        },

        onError: (action: DeleteTaco, error) => {
            console.error('Error', error);
        }
    })
}
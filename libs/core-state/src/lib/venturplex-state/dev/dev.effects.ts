import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { Dev } from '@workspace/core-data';
import { VenturplexService } from '@workspace/core-data';

import {
  AddDev,
  DeleteDev,
  DevAdded,
  DevDeleted,
  DevsActionTypes,
  DevsLoaded,
  DevUpdated,
  LoadDevs,
  UpdateDev,
} from './dev.actions';
import { DevsState } from './dev.reducer';

@Injectable({providedIn: 'root'})
export class DevsEffects {

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<DevsState>,
    private venturplexService: VenturplexService
  ) {}
  
  @Effect() effect$ = this.actions$.pipe(ofType(DevsActionTypes.DevsAction));

  @Effect()
  loadDevs$ = this.dataPersistence.fetch(DevsActionTypes.LoadDevs, {
    run: (action: LoadDevs, state: DevsState) => {
      return this.venturplexService.getDevs().pipe(map((res: Dev[]) => new DevsLoaded(res)))
    },

    onError: (action: LoadDevs, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  addDev$ = this.dataPersistence.pessimisticUpdate(DevsActionTypes.AddDev, {
    run: (action: AddDev, state: DevsState) => {
      return this.venturplexService.createDev(action.payload).pipe(map((res: Dev) => new DevAdded(res)))
    },

    onError: (action: AddDev, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  updateDev$ = this.dataPersistence.pessimisticUpdate(DevsActionTypes.UpdateDev, {
    run: (action: UpdateDev, state: DevsState) => {
      return this.venturplexService.updateDev(action.payload).pipe(map((res: Dev) => new DevUpdated(res)))
    },

    onError: (action: UpdateDev, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  deleteDev$ = this.dataPersistence.pessimisticUpdate(DevsActionTypes.DeleteDev, {
    run: (action: DeleteDev, state: DevsState) => {
      return this.venturplexService.deleteDev(action.payload).pipe(map(_ => new DevDeleted(action.payload)))
    },

    onError: (action: DeleteDev, error) => {
      console.error('Error', error);
    }
  });
}
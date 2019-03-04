import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { Smoothie } from '@workspace/core-data';
import { SmoothieService } from '@workspace/core-data';

import {
  AddSmoothie,
  DeleteSmoothie,
  SmoothieAdded,
  SmoothieDeleted,
  SmoothiesActionTypes,
  SmoothiesLoaded,
  SmoothieUpdated,
  LoadSmoothies,
  UpdateSmoothie,
} from './smoothie.actions';
import { SmoothiesState } from './smoothie.reducer';

@Injectable({providedIn: 'root'})
export class SmoothiesEffects {

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<SmoothiesState>,
    private smoothieService: SmoothieService
  ) {}
  
  @Effect() effect$ = this.actions$.pipe(ofType(SmoothiesActionTypes.SmoothiesAction));

  @Effect()
  loadSmoothies$ = this.dataPersistence.fetch(SmoothiesActionTypes.LoadSmoothies, {
    run: (action: LoadSmoothies, state: SmoothiesState) => {
      return this.smoothieService.getSmoothies().pipe(map((res: Smoothie[]) => new SmoothiesLoaded(res)))
    },

    onError: (action: LoadSmoothies, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  addSmoothie$ = this.dataPersistence.pessimisticUpdate(SmoothiesActionTypes.AddSmoothie, {
    run: (action: AddSmoothie, state: SmoothiesState) => {
      return this.smoothieService.createSmoothie(action.payload).pipe(map((res: Smoothie) => new SmoothieAdded(res)))
    },

    onError: (action: AddSmoothie, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  updateSmoothie$ = this.dataPersistence.pessimisticUpdate(SmoothiesActionTypes.UpdateSmoothie, {
    run: (action: UpdateSmoothie, state: SmoothiesState) => {
      return this.smoothieService.updateSmoothie(action.payload).pipe(map((res: Smoothie) => new SmoothieUpdated(res)))
    },

    onError: (action: UpdateSmoothie, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  deleteSmoothie$ = this.dataPersistence.pessimisticUpdate(SmoothiesActionTypes.DeleteSmoothie, {
    run: (action: DeleteSmoothie, state: SmoothiesState) => {
      return this.smoothieService.deleteSmoothie(action.payload).pipe(map(_ => new SmoothieDeleted(action.payload)))
    },

    onError: (action: DeleteSmoothie, error) => {
      console.error('Error', error);
    }
  });
}
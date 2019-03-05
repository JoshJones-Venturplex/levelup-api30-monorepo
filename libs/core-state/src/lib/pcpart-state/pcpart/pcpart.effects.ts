import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { Pcpart } from '@workspace/core-data';
import { PcpartService } from '@workspace/core-data';

import {
  AddPcpart,
  DeletePcpart,
  PcpartAdded,
  PcpartDeleted,
  PcpartsActionTypes,
  PcpartsLoaded,
  PcpartUpdated,
  LoadPcparts,
  UpdatePcpart,
} from './pcpart.actions';
import { PcpartsState } from './pcpart.reducer';

@Injectable({providedIn: 'root'})
export class PcpartsEffects {

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PcpartsState>,
    private pcpartService: PcpartService
  ) {}
  
  @Effect() effect$ = this.actions$.pipe(ofType(PcpartsActionTypes.PcpartsAction));

  @Effect()
  loadPcparts$ = this.dataPersistence.fetch(PcpartsActionTypes.LoadPcparts, {
    run: (action: LoadPcparts, state: PcpartsState) => {
      return this.pcpartService.getPcparts().pipe(map((res: Pcpart[]) => new PcpartsLoaded(res)))
    },

    onError: (action: LoadPcparts, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  addPcpart$ = this.dataPersistence.pessimisticUpdate(PcpartsActionTypes.AddPcpart, {
    run: (action: AddPcpart, state: PcpartsState) => {
      return this.pcpartService.createPcpart(action.payload).pipe(map((res: Pcpart) => new PcpartAdded(res)))
    },

    onError: (action: AddPcpart, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  updatePcpart$ = this.dataPersistence.pessimisticUpdate(PcpartsActionTypes.UpdatePcpart, {
    run: (action: UpdatePcpart, state: PcpartsState) => {
      return this.pcpartService.updatePcpart(action.payload).pipe(map((res: Pcpart) => new PcpartUpdated(res)))
    },

    onError: (action: UpdatePcpart, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  deletePcpart$ = this.dataPersistence.pessimisticUpdate(PcpartsActionTypes.DeletePcpart, {
    run: (action: DeletePcpart, state: PcpartsState) => {
      return this.pcpartService.deletePcpart(action.payload).pipe(map(_ => new PcpartDeleted(action.payload)))
    },

    onError: (action: DeletePcpart, error) => {
      console.error('Error', error);
    }
  });
}
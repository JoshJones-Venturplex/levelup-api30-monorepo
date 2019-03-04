import { Action } from '@ngrx/store';
import { Smoothie } from '@workspace/core-data';

export enum SmoothiesActionTypes {
  SmoothiesAction = '[Smoothies] Action',
  SmoothieSelected = '[Smoothies] Selected',
  LoadSmoothies = '[Smoothies] Load Data',
  SmoothiesLoaded = '[Smoothies] Data Loaded',
  AddSmoothie = '[Smoothies] Add Data',
  SmoothieAdded = '[Smoothies] Data Added',
  UpdateSmoothie = '[Smoothies] Update Data',
  SmoothieUpdated = '[Smoothies] Data Updated',
  DeleteSmoothie = '[Smoothies] Delete Data',
  SmoothieDeleted = '[Smoothies] Data Deleted',
}

export class Smoothies implements Action {
  readonly type = SmoothiesActionTypes.SmoothiesAction;
}

export class SmoothieSelected implements Action {
  readonly type = SmoothiesActionTypes.SmoothieSelected;
  constructor(public payload) { }
}

export class LoadSmoothies implements Action {
  readonly type = SmoothiesActionTypes.LoadSmoothies;
  constructor() { }
}

export class SmoothiesLoaded implements Action {
  readonly type = SmoothiesActionTypes.SmoothiesLoaded;
  constructor(public payload: Smoothie[]) { }
}

export class AddSmoothie implements Action {
  readonly type = SmoothiesActionTypes.AddSmoothie;
  constructor(public payload: Smoothie) { }
}

export class SmoothieAdded implements Action {
  readonly type = SmoothiesActionTypes.SmoothieAdded;
  constructor(public payload: Smoothie) { }
}

export class UpdateSmoothie implements Action {
  readonly type = SmoothiesActionTypes.UpdateSmoothie;
  constructor(public payload: Smoothie) { }
}

export class SmoothieUpdated implements Action {
  readonly type = SmoothiesActionTypes.SmoothieUpdated;
  constructor(public payload: Smoothie) { }
}

export class DeleteSmoothie implements Action {
  readonly type = SmoothiesActionTypes.DeleteSmoothie;
  constructor(public payload: Smoothie) { }
}

export class SmoothieDeleted implements Action {
  readonly type = SmoothiesActionTypes.SmoothieDeleted;
  constructor(public payload: Smoothie) { }
}

export type SmoothiesActions = Smoothies
  | SmoothieSelected
  | LoadSmoothies
  | SmoothiesLoaded
  | AddSmoothie
  | SmoothieAdded
  | UpdateSmoothie
  | SmoothieUpdated
  | DeleteSmoothie
  | SmoothieDeleted
;
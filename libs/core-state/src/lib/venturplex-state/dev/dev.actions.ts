import { Action } from '@ngrx/store';
import { Dev } from '@workspace/core-data';

export enum DevsActionTypes {
  DevsAction = '[Devs] Action',
  DevSelected = '[Devs] Selected',
  LoadDevs = '[Devs] Load Data',
  DevsLoaded = '[Devs] Data Loaded',
  AddDev = '[Devs] Add Data',
  DevAdded = '[Devs] Data Added',
  UpdateDev = '[Devs] Update Data',
  DevUpdated = '[Devs] Data Updated',
  DeleteDev = '[Devs] Delete Data',
  DevDeleted = '[Devs] Data Deleted',
}

export class Devs implements Action {
  readonly type = DevsActionTypes.DevsAction;
}

export class DevSelected implements Action {
  readonly type = DevsActionTypes.DevSelected;
  constructor(public payload) { }
}

export class LoadDevs implements Action {
  readonly type = DevsActionTypes.LoadDevs;
  constructor() { }
}

export class DevsLoaded implements Action {
  readonly type = DevsActionTypes.DevsLoaded;
  constructor(public payload: Dev[]) { }
}

export class AddDev implements Action {
  readonly type = DevsActionTypes.AddDev;
  constructor(public payload: Dev) { }
}

export class DevAdded implements Action {
  readonly type = DevsActionTypes.DevAdded;
  constructor(public payload: Dev) { }
}

export class UpdateDev implements Action {
  readonly type = DevsActionTypes.UpdateDev;
  constructor(public payload: Dev) { }
}

export class DevUpdated implements Action {
  readonly type = DevsActionTypes.DevUpdated;
  constructor(public payload: Dev) { }
}

export class DeleteDev implements Action {
  readonly type = DevsActionTypes.DeleteDev;
  constructor(public payload: Dev) { }
}

export class DevDeleted implements Action {
  readonly type = DevsActionTypes.DevDeleted;
  constructor(public payload: Dev) { }
}

export type DevsActions = Devs
  | DevSelected
  | LoadDevs
  | DevsLoaded
  | AddDev
  | DevAdded
  | UpdateDev
  | DevUpdated
  | DeleteDev
  | DevDeleted
;
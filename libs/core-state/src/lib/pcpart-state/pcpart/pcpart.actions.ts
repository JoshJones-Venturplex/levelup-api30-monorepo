import { Action } from '@ngrx/store';
import { Pcpart } from '@workspace/core-data';

export enum PcpartsActionTypes {
  PcpartsAction = '[Pcparts] Action',
  PcpartSelected = '[Pcparts] Selected',
  LoadPcparts = '[Pcparts] Load Data',
  PcpartsLoaded = '[Pcparts] Data Loaded',
  AddPcpart = '[Pcparts] Add Data',
  PcpartAdded = '[Pcparts] Data Added',
  UpdatePcpart = '[Pcparts] Update Data',
  PcpartUpdated = '[Pcparts] Data Updated',
  DeletePcpart = '[Pcparts] Delete Data',
  PcpartDeleted = '[Pcparts] Data Deleted',
}

export class Pcparts implements Action {
  readonly type = PcpartsActionTypes.PcpartsAction;
}

export class PcpartSelected implements Action {
  readonly type = PcpartsActionTypes.PcpartSelected;
  constructor(public payload) { }
}

export class LoadPcparts implements Action {
  readonly type = PcpartsActionTypes.LoadPcparts;
  constructor() { }
}

export class PcpartsLoaded implements Action {
  readonly type = PcpartsActionTypes.PcpartsLoaded;
  constructor(public payload: Pcpart[]) { }
}

export class AddPcpart implements Action {
  readonly type = PcpartsActionTypes.AddPcpart;
  constructor(public payload: Pcpart) { }
}

export class PcpartAdded implements Action {
  readonly type = PcpartsActionTypes.PcpartAdded;
  constructor(public payload: Pcpart) { }
}

export class UpdatePcpart implements Action {
  readonly type = PcpartsActionTypes.UpdatePcpart;
  constructor(public payload: Pcpart) { }
}

export class PcpartUpdated implements Action {
  readonly type = PcpartsActionTypes.PcpartUpdated;
  constructor(public payload: Pcpart) { }
}

export class DeletePcpart implements Action {
  readonly type = PcpartsActionTypes.DeletePcpart;
  constructor(public payload: Pcpart) { }
}

export class PcpartDeleted implements Action {
  readonly type = PcpartsActionTypes.PcpartDeleted;
  constructor(public payload: Pcpart) { }
}

export type PcpartsActions = Pcparts
  | PcpartSelected
  | LoadPcparts
  | PcpartsLoaded
  | AddPcpart
  | PcpartAdded
  | UpdatePcpart
  | PcpartUpdated
  | DeletePcpart
  | PcpartDeleted
;
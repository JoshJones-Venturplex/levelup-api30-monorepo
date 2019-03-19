import { Action } from '@ngrx/store';
import { Bagel } from '@workspace/core-data';

export enum BagelsActionTypes {
  BagelsAction = '[Bagels] Action',
  BagelSelected = '[Bagels] Selected',
  LoadBagels = '[Bagels] Load Data',
  BagelsLoaded = '[Bagels] Data Loaded',
  AddBagel = '[Bagels] Add Data',
  BagelAdded = '[Bagels] Data Added',
  UpdateBagel = '[Bagels] Update Data',
  BagelUpdated = '[Bagels] Data Updated',
  DeleteBagel = '[Bagels] Delete Data',
  BagelDeleted = '[Bagels] Data Deleted',
}

export class Bagels implements Action {
  readonly type = BagelsActionTypes.BagelsAction;
}

export class BagelSelected implements Action {
  readonly type = BagelsActionTypes.BagelSelected;
  constructor(public payload) { }
}

export class LoadBagels implements Action {
  readonly type = BagelsActionTypes.LoadBagels;
  constructor() { }
}

export class BagelsLoaded implements Action {
  readonly type = BagelsActionTypes.BagelsLoaded;
  constructor(public payload: Bagel[]) { }
}

export class AddBagel implements Action {
  readonly type = BagelsActionTypes.AddBagel;
  constructor(public payload: Bagel) { }
}

export class BagelAdded implements Action {
  readonly type = BagelsActionTypes.BagelAdded;
  constructor(public payload: Bagel) { }
}

export class UpdateBagel implements Action {
  readonly type = BagelsActionTypes.UpdateBagel;
  constructor(public payload: Bagel) { }
}

export class BagelUpdated implements Action {
  readonly type = BagelsActionTypes.BagelUpdated;
  constructor(public payload: Bagel) { }
}

export class DeleteBagel implements Action {
  readonly type = BagelsActionTypes.DeleteBagel;
  constructor(public payload: Bagel) { }
}

export class BagelDeleted implements Action {
  readonly type = BagelsActionTypes.BagelDeleted;
  constructor(public payload: Bagel) { }
}

export type BagelsActions = Bagels
  | BagelSelected
  | LoadBagels
  | BagelsLoaded
  | AddBagel
  | BagelAdded
  | UpdateBagel
  | BagelUpdated
  | DeleteBagel
  | BagelDeleted
;
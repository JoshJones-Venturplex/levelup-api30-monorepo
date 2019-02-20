import { Action } from '@ngrx/store';
import { Cheese } from '@workspace/core-data';

export enum CheesesActionTypes {
  CheesesAction = '[Cheeses] Action',
  CheeseSelected = '[Cheeses] Selected',
  LoadCheeses = '[Cheeses] Load Data',
  CheesesLoaded = '[Cheeses] Data Loaded',
  AddCheese = '[Cheeses] Add Data',
  CheeseAdded = '[Cheeses] Data Added',
  UpdateCheese = '[Cheeses] Update Data',
  CheeseUpdated = '[Cheeses] Data Updated',
  DeleteCheese = '[Cheeses] Delete Data',
  CheeseDeleted = '[Cheeses] Data Deleted',
}

export class Cheeses implements Action {
  readonly type = CheesesActionTypes.CheesesAction;
}

export class CheeseSelected implements Action {
  readonly type = CheesesActionTypes.CheeseSelected;
  constructor(public payload) { }
}

export class LoadCheeses implements Action {
  readonly type = CheesesActionTypes.LoadCheeses;
  constructor() { }
}

export class CheesesLoaded implements Action {
  readonly type = CheesesActionTypes.CheesesLoaded;
  constructor(public payload: Cheese[]) { }
}

export class AddCheese implements Action {
  readonly type = CheesesActionTypes.AddCheese;
  constructor(public payload: Cheese) { }
}

export class CheeseAdded implements Action {
  readonly type = CheesesActionTypes.CheeseAdded;
  constructor(public payload: Cheese) { }
}

export class UpdateCheese implements Action {
  readonly type = CheesesActionTypes.UpdateCheese;
  constructor(public payload: Cheese) { }
}

export class CheeseUpdated implements Action {
  readonly type = CheesesActionTypes.CheeseUpdated;
  constructor(public payload: Cheese) { }
}

export class DeleteCheese implements Action {
  readonly type = CheesesActionTypes.DeleteCheese;
  constructor(public payload: Cheese) { }
}

export class CheeseDeleted implements Action {
  readonly type = CheesesActionTypes.CheeseDeleted;
  constructor(public payload: Cheese) { }
}

export type CheesesActions = Cheeses
  | CheeseSelected
  | LoadCheeses
  | CheesesLoaded
  | AddCheese
  | CheeseAdded
  | UpdateCheese
  | CheeseUpdated
  | DeleteCheese
  | CheeseDeleted
;
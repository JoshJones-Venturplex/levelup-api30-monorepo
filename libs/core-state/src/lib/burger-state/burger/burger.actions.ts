import { Action } from '@ngrx/store';
import { Burger } from '@workspace/core-data';

export enum BurgersActionTypes {
  BurgersAction = '[Burgers] Action',
  BurgerSelected = '[Burgers] Selected',
  LoadBurgers = '[Burgers] Load Data',
  BurgersLoaded = '[Burgers] Data Loaded',
  AddBurger = '[Burgers] Add Data',
  BurgerAdded = '[Burgers] Data Added',
  UpdateBurger = '[Burgers] Update Data',
  BurgerUpdated = '[Burgers] Data Updated',
  DeleteBurger = '[Burgers] Delete Data',
  BurgerDeleted = '[Burgers] Data Deleted',
}

export class Burgers implements Action {
  readonly type = BurgersActionTypes.BurgersAction;
}

export class BurgerSelected implements Action {
  readonly type = BurgersActionTypes.BurgerSelected;
  constructor(public payload) { }
}

export class LoadBurgers implements Action {
  readonly type = BurgersActionTypes.LoadBurgers;
  constructor() { }
}

export class BurgersLoaded implements Action {
  readonly type = BurgersActionTypes.BurgersLoaded;
  constructor(public payload: Burger[]) { }
}

export class AddBurger implements Action {
  readonly type = BurgersActionTypes.AddBurger;
  constructor(public payload: Burger) { }
}

export class BurgerAdded implements Action {
  readonly type = BurgersActionTypes.BurgerAdded;
  constructor(public payload: Burger) { }
}

export class UpdateBurger implements Action {
  readonly type = BurgersActionTypes.UpdateBurger;
  constructor(public payload: Burger) { }
}

export class BurgerUpdated implements Action {
  readonly type = BurgersActionTypes.BurgerUpdated;
  constructor(public payload: Burger) { }
}

export class DeleteBurger implements Action {
  readonly type = BurgersActionTypes.DeleteBurger;
  constructor(public payload: Burger) { }
}

export class BurgerDeleted implements Action {
  readonly type = BurgersActionTypes.BurgerDeleted;
  constructor(public payload: Burger) { }
}

export type BurgersActions = Burgers
  | BurgerSelected
  | LoadBurgers
  | BurgersLoaded
  | AddBurger
  | BurgerAdded
  | UpdateBurger
  | BurgerUpdated
  | DeleteBurger
  | BurgerDeleted
;
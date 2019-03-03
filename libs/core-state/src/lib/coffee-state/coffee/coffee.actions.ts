import { Action } from '@ngrx/store';
import { Coffee } from '@workspace/core-data';

export enum CoffeesActionTypes {
  CoffeesAction = '[Coffees] Action',
  CoffeeSelected = '[Coffees] Selected',
  LoadCoffees = '[Coffees] Load Data',
  CoffeesLoaded = '[Coffees] Data Loaded',
  AddCoffee = '[Coffees] Add Data',
  CoffeeAdded = '[Coffees] Data Added',
  UpdateCoffee = '[Coffees] Update Data',
  CoffeeUpdated = '[Coffees] Data Updated',
  DeleteCoffee = '[Coffees] Delete Data',
  CoffeeDeleted = '[Coffees] Data Deleted',
}

export class Coffees implements Action {
  readonly type = CoffeesActionTypes.CoffeesAction;
}

export class CoffeeSelected implements Action {
  readonly type = CoffeesActionTypes.CoffeeSelected;
  constructor(public payload) { }
}

export class LoadCoffees implements Action {
  readonly type = CoffeesActionTypes.LoadCoffees;
  constructor() { }
}

export class CoffeesLoaded implements Action {
  readonly type = CoffeesActionTypes.CoffeesLoaded;
  constructor(public payload: Coffee[]) { }
}

export class AddCoffee implements Action {
  readonly type = CoffeesActionTypes.AddCoffee;
  constructor(public payload: Coffee) { }
}

export class CoffeeAdded implements Action {
  readonly type = CoffeesActionTypes.CoffeeAdded;
  constructor(public payload: Coffee) { }
}

export class UpdateCoffee implements Action {
  readonly type = CoffeesActionTypes.UpdateCoffee;
  constructor(public payload: Coffee) { }
}

export class CoffeeUpdated implements Action {
  readonly type = CoffeesActionTypes.CoffeeUpdated;
  constructor(public payload: Coffee) { }
}

export class DeleteCoffee implements Action {
  readonly type = CoffeesActionTypes.DeleteCoffee;
  constructor(public payload: Coffee) { }
}

export class CoffeeDeleted implements Action {
  readonly type = CoffeesActionTypes.CoffeeDeleted;
  constructor(public payload: Coffee) { }
}

export type CoffeesActions = Coffees
  | CoffeeSelected
  | LoadCoffees
  | CoffeesLoaded
  | AddCoffee
  | CoffeeAdded
  | UpdateCoffee
  | CoffeeUpdated
  | DeleteCoffee
  | CoffeeDeleted
;
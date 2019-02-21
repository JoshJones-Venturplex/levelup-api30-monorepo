import { Action } from '@ngrx/store';
import { Taco } from '@workspace/core-data';

export enum TacoActionTypes {
    TacoAction = '[Tacos] Action',
    TacoSelected = '[Tacos] Selected',
    LoadTacos = '[Tacos] Load Data',
    TacosLoaded = '[Tacos] Data Loaded',
    AddTaco = '[Tacos] Add Data',
    TacoAdded = '[Tacos] Data Added',
    UpdateTaco = '[Tacos] Update Data',
    TacoUpdated = '[Tacos] Data Updated',
    DeleteTaco = '[Tacos] Delete Data',
    TacoDeleted = '[Tacos] Data Deleted'
}

export class Tacos implements Action { 
    readonly type = TacoActionTypes.TacoAction;
}

export class TacoSelected implements Action {
    readonly type = TacoActionTypes.TacoSelected;
    constructor(public payload) {}
}

export class LoadTacos implements Action {
    readonly type = TacoActionTypes.LoadTacos;
    constructor() {}
}

export class TacosLoaded implements Action {
    readonly type = TacoActionTypes.TacosLoaded;
    constructor(public payload: Taco[]) {}
}

export class AddTaco implements Action {
    readonly type = TacoActionTypes.AddTaco;
    constructor(public payload: Taco) {}
}

export class TacoAdded implements Action {
    readonly type = TacoActionTypes.TacoAdded;
    constructor(public payload: Taco) {}
}

export class UpdateTaco implements Action {
    readonly type = TacoActionTypes.UpdateTaco;
    constructor(public payload: Taco) {}
}

export class TacoUpdated implements Action {
    readonly type = TacoActionTypes.TacoUpdated;
    constructor(public payload: Taco) {}
}

export class DeleteTaco implements Action {
    readonly type = TacoActionTypes.DeleteTaco;
    constructor(public payload: Taco) {}
}

export class TacoDeleted implements Action {
    readonly type = TacoActionTypes.TacoDeleted;
    constructor(public payload: Taco) {}
}

export type TacoActions = Tacos
  | TacoSelected
  | LoadTacos
  | TacosLoaded
  | AddTaco
  | TacoAdded
  | UpdateTaco
  | TacoUpdated
  | DeleteTaco
  | TacoDeleted
  ;
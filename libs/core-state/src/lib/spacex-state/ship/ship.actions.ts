import { Action } from '@ngrx/store';
import { Ship } from '@workspace/core-data';

export enum ShipActionTypes {
    ShipAction = '[Ships] Action',
    ShipSelected = '[Ships] Selected',
    LoadShips = '[Ships] Load Data',
    ShipsLoaded = '[Ships] Data Loaded',
}

export class Ships implements Action { 
    readonly type = ShipActionTypes.ShipAction;
}

export class ShipSelected implements Action {
    readonly type = ShipActionTypes.ShipSelected;
    constructor(public payload) {}
}

export class LoadShips implements Action {
    readonly type = ShipActionTypes.LoadShips;
    constructor() {}
}

export class ShipsLoaded implements Action {
    readonly type = ShipActionTypes.ShipsLoaded;
    constructor(public payload: Ship[]) {}
}

export type ShipActions = Ships
  | ShipSelected
  | LoadShips
  | ShipsLoaded
  ;
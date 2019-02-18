import { Action } from '@ngrx/store';
import { Player } from '@workspace/core-data';

export enum PlayersActionTypes {
  PlayersAction = '[Players] Action',
  PlayerSelected = '[Players] Selected',
  LoadPlayers = '[Players] Load Data',
  PlayersLoaded = '[Players] Data Loaded',
  AddPlayer = '[Players] Add Data',
  PlayerAdded = '[Players] Data Added',
  UpdatePlayer = '[Players] Update Data',
  PlayerUpdated = '[Players] Data Updated',
  DeletePlayer = '[Players] Delete Data',
  PlayerDeleted = '[Players] Data Deleted',
}

export class Players implements Action {
  readonly type = PlayersActionTypes.PlayersAction;
}

export class PlayerSelected implements Action {
  readonly type = PlayersActionTypes.PlayerSelected;
  constructor(public payload) { }
}

export class LoadPlayers implements Action {
  readonly type = PlayersActionTypes.LoadPlayers;
  constructor() { }
}

export class PlayersLoaded implements Action {
  readonly type = PlayersActionTypes.PlayersLoaded;
  constructor(public payload: Player[]) { }
}

export class AddPlayer implements Action {
  readonly type = PlayersActionTypes.AddPlayer;
  constructor(public payload: Player) { }
}

export class PlayerAdded implements Action {
  readonly type = PlayersActionTypes.PlayerAdded;
  constructor(public payload: Player) { }
}

export class UpdatePlayer implements Action {
  readonly type = PlayersActionTypes.UpdatePlayer;
  constructor(public payload: Player) { }
}

export class PlayerUpdated implements Action {
  readonly type = PlayersActionTypes.PlayerUpdated;
  constructor(public payload: Player) { }
}

export class DeletePlayer implements Action {
  readonly type = PlayersActionTypes.DeletePlayer;
  constructor(public payload: Player) { }
}

export class PlayerDeleted implements Action {
  readonly type = PlayersActionTypes.PlayerDeleted;
  constructor(public payload: Player) { }
}

export type PlayersActions = Players
  | PlayerSelected
  | LoadPlayers
  | PlayersLoaded
  | AddPlayer
  | PlayerAdded
  | UpdatePlayer
  | PlayerUpdated
  | DeletePlayer
  | PlayerDeleted
;
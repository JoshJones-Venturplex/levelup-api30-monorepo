import { Action } from '@ngrx/store';
import { Amiibo } from '@workspace/core-data';

export enum AmiiboActionTypes {
    AmiiboAction = '[Amiibos] Action',
    AmiiboSelected = '[Amiibos] Selected',
    LoadAmiibos = '[Amiibos] Load Data',
    AmiibosLoaded = '[Amiibos] Data Loaded',
}

export class Amiibos implements Action { 
    readonly type = AmiiboActionTypes.AmiiboAction;
}

export class AmiiboSelected implements Action {
    readonly type = AmiiboActionTypes.AmiiboSelected;
    constructor(public payload) {}
}

export class LoadAmiibos implements Action {
    readonly type = AmiiboActionTypes.LoadAmiibos;
    constructor() {}
}

export class AmiibosLoaded implements Action {
    readonly type = AmiiboActionTypes.AmiibosLoaded;
    constructor(public payload: Amiibo[]) {}
}

export type AmiiboActions = Amiibos
  | AmiiboSelected
  | LoadAmiibos
  | AmiibosLoaded
  ;
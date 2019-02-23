import { Action } from '@ngrx/store';
import { Album } from '@workspace/core-data';

export enum AlbumActionTypes {
    AlbumAction = '[Albums] Action',
    AlbumSelected = '[Albums] Selected',
    LoadAlbums = '[Albums] Load Data',
    AlbumsLoaded = '[Albums] Data Loaded',
}

export class Albums implements Action { 
    readonly type = AlbumActionTypes.AlbumAction;
}

export class AlbumSelected implements Action {
    readonly type = AlbumActionTypes.AlbumSelected;
    constructor(public payload) {}
}

export class LoadAlbums implements Action {
    readonly type = AlbumActionTypes.LoadAlbums;
    constructor() {}
}

export class AlbumsLoaded implements Action {
    readonly type = AlbumActionTypes.AlbumsLoaded;
    constructor(public payload: Album[]) {}
}

export type AlbumActions = Albums
  | AlbumSelected
  | LoadAlbums
  | AlbumsLoaded
  ;
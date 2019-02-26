import { Action } from '@ngrx/store';
import { Movie, MovieInfo } from '@workspace/core-data';

export enum MovieActionTypes {
    MovieAction = '[Movies] Action',
    LoadMoviesList = '[MoviesList] Load Movie List',
    MoviesListLoaded = '[MoviesList] Movie List Loaded',
    LoadMovieInfo = '[Movies] Load Movie Info',
    MovieInfoLoaded = '[Movies] Movie Info Loaded',
    MovieSelected = '[Movies] Selected'
}

export class Movies implements Action { 
    readonly type = MovieActionTypes.MovieAction;
}

export class MovieSelected implements Action {
    readonly type = MovieActionTypes.MovieSelected;
    constructor(public payload) {}
}

export class LoadMoviesList implements Action {
    readonly type = MovieActionTypes.LoadMoviesList;
    constructor(public payload) {}
}

export class MoviesListLoaded implements Action {
    readonly type = MovieActionTypes.MoviesListLoaded;
    constructor(public payload: MovieInfo[]) {}
}

export class LoadMovieInfo implements Action {
    readonly type = MovieActionTypes.LoadMovieInfo;
    constructor(public payload) {}
}

export class MovieInfoLoaded implements Action {
    readonly type = MovieActionTypes.MovieInfoLoaded;
    constructor(public payload: MovieInfo) {}
}

export type MovieActions = Movies
  | MovieSelected
  | LoadMoviesList
  | MoviesListLoaded
  | LoadMovieInfo
  | MovieInfoLoaded
  ;
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { Movie, MovieInfo, MovieService } from '@workspace/core-data';

import {
    MovieActionTypes,
    LoadMoviesList,
    MoviesListLoaded,
    LoadMovieInfo,
    MovieInfoLoaded
} from './movie.actions'
import { MoviesState } from '..';

@Injectable({providedIn: 'root'})
export class MovieEffects {

    @Effect()
    LoadMoviesList$ = this.dataPersistence.fetch(MovieActionTypes.LoadMoviesList, {
        run: (action: LoadMoviesList, state: MoviesState) => {
            return this.movieService.getMovies(action.payload).pipe(map((res: any) => new MoviesListLoaded(res.Search)))
        },

        onError: (action: LoadMoviesList, error) => {
            console.error('Error', error);
        }
    })

    @Effect()
    LoadMovieInfo$ = this.dataPersistence.fetch(MovieActionTypes.LoadMovieInfo, {
        run: (action: LoadMovieInfo, state: MoviesState) => {
            return this.movieService.getMovieInfo(action.payload).pipe(map((res) => new MovieInfoLoaded(res)))
        },

        onError: (action: LoadMovieInfo, error) => {
            console.error('Error', error);
        }
    })

    constructor(
        private actions$: Actions,
        private dataPersistence: DataPersistence<MoviesState>,
        private movieService: MovieService
    ) {}
}
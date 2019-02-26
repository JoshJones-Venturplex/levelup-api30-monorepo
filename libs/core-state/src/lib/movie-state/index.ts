import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromMovie from './movie/movie.reducer';

import { Movie, MovieInfo } from '@workspace/core-data';

export interface MoviesState {
    movies: fromMovie.MoviesState
}

export const reducers: ActionReducerMap<MoviesState> = {
    movies: fromMovie.movieReducer
}

export const selectMoviesState = createFeatureSelector<fromMovie.MoviesState>('movies');

export const selectMovieIds = createSelector(
    selectMoviesState,
    fromMovie.selectMovieIds
  );
  export const selectMovieEntities = createSelector(
    selectMoviesState,
    fromMovie.selectMovieEntities
  );
  export const selectAllMovies = createSelector(
    selectMoviesState,
    fromMovie.selectAllMovies
  );
  export const selectCurrentMovieId = createSelector(
    selectMoviesState,
    fromMovie.getSelectedMovieId
  );
  
  const emptyMovieInfo: MovieInfo = {
    Title: '',
    Year: '',
    Rated: '',
    Released: '',
    Runtime: '',
    Genre: '',
    Director: '',
    Writer: '',
    Actors: '',
    Plot: '',
    Language: '',
    Country: '',
    Awards: '',
    Poster: '',
    Ratings: [],
    Metascore: '',
    imdbRating: '',
    imdbVotes: '',
    imdbID: '',
    Type: '',
    DVD: '',
    BoxOffice: '',
    Production: '',
    Website: '',
    Response: ''
  }
  
  export const selectCurrentMovie = createSelector(
    selectMovieEntities,
    selectCurrentMovieId,
    (movieEntities, movieId) => {
      return movieId ? movieEntities[movieId] : emptyMovieInfo;
    }
  );
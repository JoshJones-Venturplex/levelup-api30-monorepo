import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { selectAllMovies, selectCurrentMovie } from '..';
import { MovieActionTypes } from './movie.actions';
import * as MovieActions from './movie.actions';
import { MoviesState } from './movie.reducer';

@Injectable({
  providedIn: 'root'
})
export class MovieFacade {
  allMovies$ = this.store.pipe(select(selectAllMovies));
  currentMovie$ = this.store.pipe(select(selectCurrentMovie));

  constructor(
    private store: Store<MoviesState>,
    private actions$: ActionsSubject
  ) {}

  selectMovie(itemId) {
    this.store.dispatch(new MovieActions.MovieSelected(itemId));
  }

  loadMovieInfo(itemId) {
      this.store.dispatch(new MovieActions.LoadMovieInfo(itemId));
  }

  loadMovies(search) {
    this.store.dispatch(new MovieActions.LoadMoviesList(search));
  }
}

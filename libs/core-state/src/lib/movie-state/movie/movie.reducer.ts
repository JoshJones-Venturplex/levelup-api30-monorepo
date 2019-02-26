import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Movie, MovieInfo } from '@workspace/core-data';

import { MovieActions, MovieActionTypes } from './movie.actions';

export interface MoviesState extends EntityState<MovieInfo> {
  getSelectedMovieId: string | null;
}

export const adapter: EntityAdapter<MovieInfo> = createEntityAdapter<MovieInfo>({
    selectId: movie => movie.imdbID
});

export const initialState: MoviesState = adapter.getInitialState({
    getSelectedMovieId: null
});

export function movieReducer(state = initialState, action: MovieActions): MoviesState {
    switch (action.type) {
        
        case MovieActionTypes.MoviesListLoaded: {
            return adapter.upsertMany(action.payload, state);
        }
        
        case MovieActionTypes.MovieInfoLoaded: {
            return adapter.updateOne({ id: action.payload.imdbID, changes: action.payload }, state);
        }

        case MovieActionTypes.MovieSelected: {
            return Object.assign({}, state, { getSelectedMovieId: action.payload });
        }

        default:
            return state;
    }
}

export const getSelectedMovieId = (state: MoviesState) => state.getSelectedMovieId;

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectMovieIds = selectIds;

export const selectMovieEntities = selectEntities;

export const selectAllMovies = selectAll;

export const selectMovieTotal = selectTotal;
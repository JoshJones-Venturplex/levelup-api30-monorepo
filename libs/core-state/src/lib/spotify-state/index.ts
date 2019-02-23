import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromAuth from './auth/auth.reducer';
import * as fromAlbum from './album/album.reducer';

import { Album } from '@workspace/core-data';

export interface AppState {
  auth: fromAuth.AuthState;
  album: fromAlbum.AlbumState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  album: fromAlbum.albumReducer
};

export const selectAuthState = createFeatureSelector<fromAuth.AuthState>(
  'auth'
);

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  fromAuth.selectIsLoggedIn
);

export const selectAlbumState = createFeatureSelector<fromAlbum.AlbumState>(
  'album'
);

export const selectAlbumIds = createSelector(
  selectAlbumState,
  fromAlbum.selectAlbumIds
);

export const selectAlbumEntities = createSelector(
  selectAlbumState,
  fromAlbum.selectAlbumEntities
);
export const selectAllAlbums = createSelector(
  selectAlbumState,
  fromAlbum.selectAllAlbums
);
export const selectCurrentAlbumId = createSelector(
  selectAlbumState,
  fromAlbum.getSelectedAlbumId
);

const emptyAlbum: Album = {
  album_type: '',
  artists: [],
  available_markets: [],
  external_urls: {
    spotify: ''
  },
  href: '',
  id: '',
  images: [],
  name: '',
  type: '',
  uri: ''
};

export const selectCurrentAlbum = createSelector(
  selectAlbumEntities,
  selectCurrentAlbumId,
  (albumEntities, albumId) => {
    return albumId ? albumEntities[albumId] : emptyAlbum;
  }
);

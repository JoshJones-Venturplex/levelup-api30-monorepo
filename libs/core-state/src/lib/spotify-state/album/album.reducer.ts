import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Album } from '@workspace/core-data';

import { AlbumActions, AlbumActionTypes } from './album.actions';

export interface AlbumState extends EntityState<Album> {
    selectedAlbumId: string | null;
}

export const albumAdapter: EntityAdapter<Album> = createEntityAdapter<Album>();
export const initialState: AlbumState = albumAdapter.getInitialState({
    selectedAlbumId: null
});

export function albumReducer(state = initialState, action: AlbumActions): AlbumState {
    switch (action.type) {
        case AlbumActionTypes.AlbumSelected: {
            return Object.assign({}, state, { selectedAlbumId: action.payload });
        }

        case AlbumActionTypes.AlbumsLoaded: {
            return albumAdapter.addAll(action.payload, state);
        }

        default:
            return state;
    }
}

export const getSelectedAlbumId = (state: AlbumState) => state.selectedAlbumId;

const { selectIds, selectEntities, selectAll, selectTotal } = albumAdapter.getSelectors();

export const selectAlbumIds = selectIds;

export const selectAlbumEntities = selectEntities;

export const selectAllAlbums = selectAll;

export const selectAlbumTotal = selectTotal;
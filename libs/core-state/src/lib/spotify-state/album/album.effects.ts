import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { Album } from '@workspace/core-data';
import { SpotifyService } from '@workspace/core-data';

import {
    AlbumActionTypes,
    LoadAlbums,
    AlbumsLoaded
} from './album.actions';
import { AlbumState } from './album.reducer';

@Injectable({providedIn: 'root'})
export class AlbumEffects {

    constructor(
        private actions$: Actions,
        private dataPersistence: DataPersistence<AlbumState>,
        private spotifyService: SpotifyService
    ) {}

    @Effect() effect$ = this.actions$.pipe(ofType(AlbumActionTypes.AlbumAction));

    @Effect()
    loadAlbums$ = this.dataPersistence.fetch(AlbumActionTypes.LoadAlbums, {
        run: (action: LoadAlbums, state: AlbumState) => {
            return this.spotifyService.getNewReleases().pipe(map((res: any) => new AlbumsLoaded(res.albums.items)))
        },

        onError: (action: LoadAlbums, error) => {
            console.error('Error', error);
        }
    });
}
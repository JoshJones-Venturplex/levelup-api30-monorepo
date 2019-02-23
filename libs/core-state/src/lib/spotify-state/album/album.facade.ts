import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { selectAllAlbums, selectCurrentAlbum } from '..';
import { AlbumActionTypes } from './album.actions';
import * as AlbumActions from './album.actions';
import { AlbumState } from './album.reducer';

@Injectable({
  providedIn: 'root'
})
export class AlbumFacade {
  allAlbums$ = this.store.pipe(select(selectAllAlbums));
  currentAlbum$ = this.store.pipe(select(selectCurrentAlbum));

  constructor(
    private store: Store<AlbumState>,
    private actions$: ActionsSubject
  ) {}

  selectAlbum(itemId) {
    this.store.dispatch(new AlbumActions.AlbumSelected(itemId));
  }

  loadAlbums() {
    this.store.dispatch(new AlbumActions.LoadAlbums());
  }
}

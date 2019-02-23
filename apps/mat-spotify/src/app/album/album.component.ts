import { Component, OnInit } from '@angular/core';
import { AlbumFacade } from '@workspace/core-state';
import { Observable } from 'rxjs';
import { Album } from '@workspace/core-data';

@Component({
  selector: 'workspace-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  albums$: Observable<Album[]> = this.albumFacade.allAlbums$;
  currentAlbum$: Observable<Album> = this.albumFacade.currentAlbum$;

  constructor(private albumFacade: AlbumFacade) {}

  ngOnInit() {
    this.albumFacade.loadAlbums();
  }

  selectAlbum(album) {
    this.albumFacade.selectAlbum(album.id);
  }
}
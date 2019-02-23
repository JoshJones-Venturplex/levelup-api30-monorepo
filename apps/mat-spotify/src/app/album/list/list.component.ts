import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Album } from '@workspace/core-data';

@Component({
  selector: 'workspace-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() albums: Album[];
  @Output() albumSelected: EventEmitter<Album> = new EventEmitter();

  constructor() { }

  selectAlbum(album) {
    this.albumSelected.emit(album);
  }
}
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Amiibo } from '@workspace/core-data';

@Component({
  selector: 'workspace-amiibo-list',
  templateUrl: './amiibo-list.component.html',
  styleUrls: ['./amiibo-list.component.scss']
})
export class AmiiboListComponent {
  @Input() amiibos: Amiibo[];
  @Output() amiiboSelected: EventEmitter<Amiibo> = new EventEmitter();

  constructor() { }

  selectAmiibo(amiibo) {
    this.amiiboSelected.emit(amiibo);
  }
}
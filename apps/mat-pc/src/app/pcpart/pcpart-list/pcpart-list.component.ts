import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Pcpart } from '@workspace/core-data';

@Component({
  selector: 'workspace-pcpart-list',
  templateUrl: './pcpart-list.component.html',
  styleUrls: ['./pcpart-list.component.scss']
})
export class PcpartListComponent {
  @Input() pcparts: Pcpart[];
  @Output() pcpartSelected: EventEmitter<Pcpart> = new EventEmitter();
  @Output() reset: EventEmitter<void> = new EventEmitter();

  constructor() { }

  selectPcpart(pcpart) {
    this.pcpartSelected.emit(pcpart);
  }
}
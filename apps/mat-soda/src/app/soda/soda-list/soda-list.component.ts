import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Soda } from '../../shared/soda';

@Component({
  selector: 'workspace-soda-list',
  templateUrl: './soda-list.component.html',
  styleUrls: ['./soda-list.component.scss']
})
export class SodaListComponent {
  @Input() sodas: Soda[];
  @Output() sodaSelected: EventEmitter<Soda> = new EventEmitter();
  @Output() reset: EventEmitter<void> = new EventEmitter();

  constructor() { }

  selectSoda(soda) {
    this.sodaSelected.emit(soda);
  }
}

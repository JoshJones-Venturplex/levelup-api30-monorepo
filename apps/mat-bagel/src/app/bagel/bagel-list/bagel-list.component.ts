import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Bagel } from '@workspace/core-data';

@Component({
  selector: 'workspace-bagel-list',
  templateUrl: './bagel-list.component.html',
  styleUrls: ['./bagel-list.component.scss']
})
export class BagelListComponent {
  @Input() bagels: Bagel[];
  @Output() bagelSelected: EventEmitter<Bagel> = new EventEmitter();
  @Output() reset: EventEmitter<void> = new EventEmitter();

  constructor() { }

  selectBagel(bagel) {
    this.bagelSelected.emit(bagel);
  }
}
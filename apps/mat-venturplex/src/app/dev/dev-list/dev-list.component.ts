import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Dev } from '@workspace/core-data';

@Component({
  selector: 'workspace-dev-list',
  templateUrl: './dev-list.component.html',
  styleUrls: ['./dev-list.component.scss']
})
export class DevListComponent {
  @Input() devs: Dev[];
  @Output() devSelected: EventEmitter<Dev> = new EventEmitter();
  @Output() reset: EventEmitter<void> = new EventEmitter();

  constructor() { }

  selectDev(dev) {
    this.devSelected.emit(dev);
  }
}
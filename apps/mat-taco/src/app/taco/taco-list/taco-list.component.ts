import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Taco } from '@workspace/core-data';

@Component({
  selector: 'workspace-taco-list',
  templateUrl: './taco-list.component.html',
  styleUrls: ['./taco-list.component.scss']
})
export class TacoListComponent {
  @Input() tacos: Taco[];
  @Output() tacoSelected: EventEmitter<Taco> = new EventEmitter();
  @Output() reset: EventEmitter<void> = new EventEmitter();

  constructor() { }

  selectTaco(taco) {
    this.tacoSelected.emit(taco);
  }
}
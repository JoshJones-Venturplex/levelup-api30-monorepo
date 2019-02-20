import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Cheese } from '@workspace/core-data';

@Component({
  selector: 'workspace-cheese-list',
  templateUrl: './cheese-list.component.html',
  styleUrls: ['./cheese-list.component.scss']
})
export class CheeseListComponent {
  @Input() cheeses: Cheese[];
  @Output() cheeseSelected: EventEmitter<Cheese> = new EventEmitter();
  @Output() reset: EventEmitter<void> = new EventEmitter();

  constructor() { }

  selectCheese(cheese) {
    this.cheeseSelected.emit(cheese);
  }
}

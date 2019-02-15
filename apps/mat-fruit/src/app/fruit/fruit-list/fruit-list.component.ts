import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Fruit } from '@workspace/core-data';

@Component({
  selector: 'workspace-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.scss']
})
export class FruitListComponent {
  @Input() fruits: Fruit[];
  @Output() fruitSelected: EventEmitter<Fruit> = new EventEmitter();
  @Output() reset: EventEmitter<void> = new EventEmitter();

  constructor() { }

  selectFruit(fruit) {
    this.fruitSelected.emit(fruit);
  }
}

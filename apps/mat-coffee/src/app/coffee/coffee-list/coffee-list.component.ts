import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Coffee } from '@workspace/core-data';

@Component({
  selector: 'workspace-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss']
})
export class CoffeeListComponent {
  @Input() coffees: Coffee[];
  @Output() coffeeSelected: EventEmitter<Coffee> = new EventEmitter();
  @Output() reset: EventEmitter<void> = new EventEmitter();

  constructor() { }

  selectCoffee(coffee) {
    this.coffeeSelected.emit(coffee);
  }
}
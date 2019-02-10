import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'workspace-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent {
  @Input() pizzas: any[];
  @Output() pizzaSelected: EventEmitter<any> = new EventEmitter;
  @Output() reset:EventEmitter<any> = new EventEmitter;

  constructor() { }

  selectPizza(pizza) {
    this.pizzaSelected.emit(pizza);
  }

}

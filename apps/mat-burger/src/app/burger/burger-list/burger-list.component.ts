import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Burger } from '@workspace/core-data';

@Component({
  selector: 'workspace-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.scss']
})
export class BurgerListComponent {
  @Input() burgers: Burger[];
  @Output() burgerSelected: EventEmitter<Burger> = new EventEmitter();
  @Output() reset: EventEmitter<void> = new EventEmitter();

  constructor() { }

  selectBurger(burger) {
    this.burgerSelected.emit(burger);
  }
}

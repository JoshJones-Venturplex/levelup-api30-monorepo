import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Ship } from '@workspace/core-data';

@Component({
  selector: 'workspace-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.scss']
})
export class ShipListComponent {
  @Input() ships: Ship[];
  @Output() shipSelected: EventEmitter<Ship> = new EventEmitter();

  constructor() { }

  selectShip(ship) {
    this.shipSelected.emit(ship);
  }
}
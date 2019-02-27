import { Component, OnInit } from '@angular/core';
import { ShipFacade } from '@workspace/core-state';
import { Observable } from 'rxjs';
import { Ship } from '@workspace/core-data';

@Component({
  selector: 'workspace-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {
  ships$: Observable<Ship[]> = this.shipsFacade.allShips$;
  currentShip$: Observable<Ship> = this.shipsFacade.currentShip$;

  constructor(private shipsFacade: ShipFacade) {}

  ngOnInit() {
    this.shipsFacade.loadShips();
  }

  selectShip(ship) {
    this.shipsFacade.selectShip(ship.ship_id);
  }
}
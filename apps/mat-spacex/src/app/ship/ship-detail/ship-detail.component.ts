import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ship } from '@workspace/core-data';

@Component({
  selector: 'workspace-ship-detail',
  templateUrl: './ship-detail.component.html',
  styleUrls: ['./ship-detail.component.scss']
})
export class ShipDetailComponent {
  @Input() selectedShip: Ship;

  constructor() {}
}

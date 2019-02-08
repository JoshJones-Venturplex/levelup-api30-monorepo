import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'workspace-energy-list',
  templateUrl: './energy-list.component.html',
  styleUrls: ['./energy-list.component.scss']
})
export class EnergyListComponent implements OnInit {
  @Input() drinks: any[];
  @Output() drinkSelected: EventEmitter<any> = new EventEmitter;
  @Output() reset:EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  selectDrink(drink) {
    this.drinkSelected.emit(drink);
  }

}

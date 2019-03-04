import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Smoothie } from '@workspace/core-data';

@Component({
  selector: 'workspace-smoothie-list',
  templateUrl: './smoothie-list.component.html',
  styleUrls: ['./smoothie-list.component.scss']
})
export class SmoothieListComponent {
  @Input() smoothies: Smoothie[];
  @Output() smoothieSelected: EventEmitter<Smoothie> = new EventEmitter();
  @Output() reset: EventEmitter<void> = new EventEmitter();

  constructor() { }

  selectSmoothie(smoothie) {
    this.smoothieSelected.emit(smoothie);
  }
}
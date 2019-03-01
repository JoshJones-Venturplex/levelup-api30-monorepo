import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Item } from '@workspace/core-data';

@Component({
  selector: 'workspace-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  @Input() items: Item[];
  @Output() itemSelected: EventEmitter<Item> = new EventEmitter();
  @Output() reset: EventEmitter<void> = new EventEmitter();

  constructor() { }

  selectItem(item) {
    this.itemSelected.emit(item);
  }
}
import { Component, OnInit } from '@angular/core';
import { ItemsFacade } from '@workspace/core-state';
import { Observable } from 'rxjs';
import { Item } from '@workspace/core-data';

@Component({
  selector: 'workspace-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  items$: Observable<Item[]> = this.itemFacade.allItems$;
  currentItem$: Observable<Item> = this.itemFacade.currentItem$;
  loading: Observable<boolean> = this.itemFacade.loading$

  constructor(private itemFacade: ItemsFacade) {}

  ngOnInit() {
    this.itemFacade.loadItems();
    this.itemFacade.mutations$.subscribe(_ => this.resetCurrentItem());
    this.resetCurrentItem();
  }

  resetCurrentItem() {
    this.selectItem({ id: null });
  }

  selectItem(item) {
    this.itemFacade.selectItem(item.id);
  }

  saveItem(item) {
    if (!item.id) {
      this.itemFacade.addItem(item);
    } else {
      this.itemFacade.updateItem(item);
    }
  }

  deleteItem(item) {
    this.itemFacade.deleteItem(item);
  }
}
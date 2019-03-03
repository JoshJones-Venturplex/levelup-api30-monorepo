import { Component, OnInit } from '@angular/core';
import { CoffeesFacade } from '@workspace/core-state';
import { Observable } from 'rxjs';
import { Coffee } from '@workspace/core-data';

@Component({
  selector: 'workspace-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {
  coffees$: Observable<Coffee[]> = this.coffeeFacade.allCoffees$;
  currentCoffee$: Observable<Coffee> = this.coffeeFacade.currentCoffee$;
  loading: Observable<boolean> = this.coffeeFacade.loading$

  constructor(private coffeeFacade: CoffeesFacade) {}

  ngOnInit() {
    this.coffeeFacade.loadCoffees();
    this.coffeeFacade.mutations$.subscribe(_ => this.resetCurrentCoffee());
    this.resetCurrentCoffee();
  }

  resetCurrentCoffee() {
    this.selectCoffee({ id: null });
  }

  selectCoffee(coffee) {
    this.coffeeFacade.selectCoffee(coffee.id);
  }

  saveCoffee(coffee) {
    if (!coffee.id) {
      this.coffeeFacade.addCoffee(coffee);
    } else {
      this.coffeeFacade.updateCoffee(coffee);
    }
  }

  deleteCoffee(coffee) {
    this.coffeeFacade.deleteCoffee(coffee);
  }
}
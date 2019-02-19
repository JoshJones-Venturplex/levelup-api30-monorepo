import { Component, OnInit } from '@angular/core';
import { BurgersFacade } from '@workspace/core-state';
import { Observable } from 'rxjs';
import { Burger } from '@workspace/core-data';

@Component({
  selector: 'workspace-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent implements OnInit {
  burgers$: Observable<Burger[]> = this.burgersFacade.allBurgers$;
  currentBurger$: Observable<Burger> = this.burgersFacade.currentBurger$;

  constructor(private burgersFacade: BurgersFacade) {}

  ngOnInit() {
    this.burgersFacade.loadBurgers();
    this.burgersFacade.mutations$.subscribe(_ => this.resetCurrentBurger());
    this.resetCurrentBurger();
  }

  resetCurrentBurger() {
    this.selectBurger({ id: null });
  }

  selectBurger(burger) {
    this.burgersFacade.selectBurger(burger.id);
  }

  saveBurger(burger) {
    if (!burger.id) {
      this.burgersFacade.addBurger(burger);
    } else {
      this.burgersFacade.updateBurger(burger);
    }
  }

  deleteBurger(burger) {
    this.burgersFacade.deleteBurger(burger);
  }
}
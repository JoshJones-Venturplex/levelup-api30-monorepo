import { Component, OnInit } from '@angular/core';
import { CheesesFacade } from '@workspace/core-state';
import { Observable } from 'rxjs';
import { Cheese } from '@workspace/core-data';

@Component({
  selector: 'workspace-cheese',
  templateUrl: './cheese.component.html',
  styleUrls: ['./cheese.component.scss']
})
export class CheeseComponent implements OnInit {
  cheeses$: Observable<Cheese[]> = this.cheesesFacade.allCheeses$;
  currentCheese$: Observable<Cheese> = this.cheesesFacade.currentCheese$;

  constructor(private cheesesFacade: CheesesFacade) {}

  ngOnInit() {
    this.cheesesFacade.loadCheeses();
    this.cheesesFacade.mutations$.subscribe(_ => this.resetCurrentCheese());
    this.resetCurrentCheese();
  }

  resetCurrentCheese() {
    this.selectCheese({ id: null });
  }

  selectCheese(cheese) {
    this.cheesesFacade.selectCheese(cheese.id);
  }

  saveCheese(cheese) {
    if (!cheese.id) {
      this.cheesesFacade.addCheese(cheese);
    } else {
      this.cheesesFacade.updateCheese(cheese);
    }
  }

  deleteCheese(cheese) {
    this.cheesesFacade.deleteCheese(cheese);
  }
}
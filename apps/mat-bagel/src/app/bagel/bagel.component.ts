import { Component, OnInit } from '@angular/core';
import { BagelsFacade } from '@workspace/core-state';
import { Observable } from 'rxjs';
import { Bagel } from '@workspace/core-data';

@Component({
  selector: 'workspace-bagel',
  templateUrl: './bagel.component.html',
  styleUrls: ['./bagel.component.scss']
})
export class BagelComponent implements OnInit {
  bagels$: Observable<Bagel[]> = this.bagelFacade.allBagels$;
  currentBagel$: Observable<Bagel> = this.bagelFacade.currentBagel$;
  loading: Observable<boolean> = this.bagelFacade.loading$

  constructor(private bagelFacade: BagelsFacade) {}

  ngOnInit() {
    this.bagelFacade.loadBagels();
    this.bagelFacade.mutations$.subscribe(_ => this.resetCurrentBagel());
    this.resetCurrentBagel();
  }

  resetCurrentBagel() {
    this.selectBagel({ id: null });
  }

  selectBagel(bagel) {
    this.bagelFacade.selectBagel(bagel.id);
  }

  saveBagel(bagel) {
    if (!bagel.id) {
      this.bagelFacade.addBagel(bagel);
    } else {
      this.bagelFacade.updateBagel(bagel);
    }
  }

  deleteBagel(bagel) {
    this.bagelFacade.deleteBagel(bagel);
  }
}
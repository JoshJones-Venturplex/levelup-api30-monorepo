import { Component, OnInit } from '@angular/core';
import { TacoFacade } from '@workspace/core-state';
import { Observable } from 'rxjs';
import { Taco } from '@workspace/core-data';

@Component({
  selector: 'workspace-taco',
  templateUrl: './taco.component.html',
  styleUrls: ['./taco.component.scss']
})
export class TacoComponent implements OnInit {
  tacos$: Observable<Taco[]> = this.tacosFacade.allTacos$;
  currentTaco$: Observable<Taco> = this.tacosFacade.currentTaco$;

  constructor(private tacosFacade: TacoFacade) {}

  ngOnInit() {
    this.tacosFacade.loadTacos();
    this.tacosFacade.mutations$.subscribe(_ => this.resetCurrentTaco());
    this.resetCurrentTaco();
  }

  resetCurrentTaco() {
    this.selectTaco({ id: null });
  }

  selectTaco(taco) {
    this.tacosFacade.selectTaco(taco.id);
  }

  saveTaco(taco) {
    if (!taco.id) {
      this.tacosFacade.addTaco(taco);
    } else {
      this.tacosFacade.updateTaco(taco);
    }
  }

  deleteTaco(taco) {
    this.tacosFacade.deleteTaco(taco);
  }
}
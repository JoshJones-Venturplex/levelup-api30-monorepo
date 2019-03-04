import { Component, OnInit } from '@angular/core';
import { SmoothiesFacade } from '@workspace/core-state';
import { Observable } from 'rxjs';
import { Smoothie } from '@workspace/core-data';

@Component({
  selector: 'workspace-smoothie',
  templateUrl: './smoothie.component.html',
  styleUrls: ['./smoothie.component.scss']
})
export class SmoothieComponent implements OnInit {
  smoothies$: Observable<Smoothie[]> = this.smoothieFacade.allSmoothies$;
  currentSmoothie$: Observable<Smoothie> = this.smoothieFacade.currentSmoothie$;
  loading: Observable<boolean> = this.smoothieFacade.loading$

  constructor(private smoothieFacade: SmoothiesFacade) {}

  ngOnInit() {
    this.smoothieFacade.loadSmoothies();
    this.smoothieFacade.mutations$.subscribe(_ => this.resetCurrentSmoothie());
    this.resetCurrentSmoothie();
  }

  resetCurrentSmoothie() {
    this.selectSmoothie({ id: null });
  }

  selectSmoothie(smoothie) {
    this.smoothieFacade.selectSmoothie(smoothie.id);
  }

  saveSmoothie(smoothie) {
    if (!smoothie.id) {
      this.smoothieFacade.addSmoothie(smoothie);
    } else {
      this.smoothieFacade.updateSmoothie(smoothie);
    }
  }

  deleteSmoothie(smoothie) {
    this.smoothieFacade.deleteSmoothie(smoothie);
  }
}
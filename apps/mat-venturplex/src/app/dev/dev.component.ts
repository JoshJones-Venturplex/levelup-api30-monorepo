import { Component, OnInit } from '@angular/core';
import { DevsFacade } from '@workspace/core-state';
import { Observable } from 'rxjs';
import { Dev } from '@workspace/core-data';

@Component({
  selector: 'workspace-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss']
})
export class DevComponent implements OnInit {
  devs$: Observable<Dev[]> = this.devFacade.allDevs$;
  currentDev$: Observable<Dev> = this.devFacade.currentDev$;
  loading: Observable<boolean> = this.devFacade.loading$

  constructor(private devFacade: DevsFacade) {}

  ngOnInit() {
    this.devFacade.loadDevs();
    this.devFacade.mutations$.subscribe(_ => this.resetCurrentDev());
    this.resetCurrentDev();
  }

  resetCurrentDev() {
    this.selectDev({ id: null });
  }

  selectDev(dev) {
    this.devFacade.selectDev(dev.id);
  }

  saveDev(dev) {
    if (!dev.id) {
      this.devFacade.addDev(dev);
    } else {
      this.devFacade.updateDev(dev);
    }
  }

  deleteDev(dev) {
    this.devFacade.deleteDev(dev);
  }
}
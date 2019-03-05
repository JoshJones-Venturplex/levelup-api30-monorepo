import { Component, OnInit } from '@angular/core';
import { PcpartsFacade } from '@workspace/core-state';
import { Observable } from 'rxjs';
import { Pcpart } from '@workspace/core-data';

@Component({
  selector: 'workspace-pcpart',
  templateUrl: './pcpart.component.html',
  styleUrls: ['./pcpart.component.scss']
})
export class PcpartComponent implements OnInit {
  pcparts$: Observable<Pcpart[]> = this.pcpartFacade.allPcparts$;
  currentPcpart$: Observable<Pcpart> = this.pcpartFacade.currentPcpart$;
  loading: Observable<boolean> = this.pcpartFacade.loading$

  constructor(private pcpartFacade: PcpartsFacade) {}

  ngOnInit() {
    this.pcpartFacade.loadPcparts();
    this.pcpartFacade.mutations$.subscribe(_ => this.resetCurrentPcpart());
    this.resetCurrentPcpart();
  }

  resetCurrentPcpart() {
    this.selectPcpart({ id: null });
  }

  selectPcpart(pcpart) {
    this.pcpartFacade.selectPcpart(pcpart.id);
  }

  savePcpart(pcpart) {
    if (!pcpart.id) {
      this.pcpartFacade.addPcpart(pcpart);
    } else {
      this.pcpartFacade.updatePcpart(pcpart);
    }
  }

  deletePcpart(pcpart) {
    this.pcpartFacade.deletePcpart(pcpart);
  }
}
import { Component, OnInit } from '@angular/core';
import { AmiiboFacade } from '@workspace/core-state';
import { Observable } from 'rxjs';
import { Amiibo } from '@workspace/core-data';

@Component({
  selector: 'workspace-amiibo',
  templateUrl: './amiibo.component.html',
  styleUrls: ['./amiibo.component.scss']
})
export class AmiiboComponent implements OnInit {
  amiibos$: Observable<Amiibo[]> = this.amiibosFacade.allAmiibos$;
  currentAmiibo$: Observable<Amiibo> = this.amiibosFacade.currentAmiibo$;

  constructor(private amiibosFacade: AmiiboFacade) {}

  ngOnInit() {
    this.amiibosFacade.loadAmiibos();
  }

  selectAmiibo(amiibo) {
    this.amiibosFacade.selectAmiibo(amiibo.head);
  }
}
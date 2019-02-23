import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '@workspace/core-state';
import { LoginComplete } from '@workspace/core-state';

@Component({
  selector: 'workspace-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoginComplete());
  }

}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '@workspace/core-state';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mat-spotify';

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.CheckLogin());
  }
}

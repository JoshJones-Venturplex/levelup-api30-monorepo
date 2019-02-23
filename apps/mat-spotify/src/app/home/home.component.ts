import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '@workspace/core-state';
import { Logout } from '@workspace/core-state';
import { Router } from '@angular/router';

@Component({
  selector: 'workspace-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new Logout());
  }

}

import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { selectAllTickets, selectCurrentTicket } from '..';
import { TicketsActionTypes } from './ticket.actions';
import * as TicketsActions from './ticket.actions';
import { TicketsState } from './ticket.reducer';

@Injectable({
  providedIn: 'root'
})
export class TicketsFacade {
  allTickets$ = this.store.pipe(select(selectAllTickets));
  currentTicket$ = this.store.pipe(select(selectCurrentTicket));

  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === TicketsActionTypes.AddTicket
        || action.type === TicketsActionTypes.UpdateTicket
        || action.type === TicketsActionTypes.DeleteTicket
      )
    );

  constructor(private store: Store<TicketsState>, private actions$: ActionsSubject) {}

  selectTicket(itemId) {
    this.store.dispatch(new TicketsActions.TicketSelected(itemId));
  }

  loadTickets() {
    this.store.dispatch(new TicketsActions.LoadTickets());
  }

  addTicket(item) {
    this.store.dispatch(new TicketsActions.AddTicket(item));
  }

  updateTicket(item) {
    this.store.dispatch(new TicketsActions.UpdateTicket(item));
  }

  deleteTicket(item) {
    this.store.dispatch(new TicketsActions.DeleteTicket(item));
  }
}
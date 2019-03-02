import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromTickets from './ticket/ticket.reducer';

import { Ticket } from '@workspace/core-data';

export interface AppState {
  tickets: fromTickets.TicketsState
}

export const reducers: ActionReducerMap<AppState> = {
  tickets: fromTickets.ticketsReducer
};

export const selectTicketsState = createFeatureSelector<fromTickets.TicketsState>('tickets');

export const selectTicketIds = createSelector(
  selectTicketsState,
  fromTickets.selectTicketIds
);
export const selectTicketEntities = createSelector(
  selectTicketsState,
  fromTickets.selectTicketEntities
);
export const selectAllTickets = createSelector(
  selectTicketsState,
  fromTickets.selectAllTickets
);
export const selectCurrentTicketId = createSelector(
  selectTicketsState,
  fromTickets.getSelectedTicketId
);

const emptyTicket: Ticket = {
    id: null,
    name: '',
    description: '',
    status: ''
}

export const selectCurrentTicket = createSelector(
  selectTicketEntities,
  selectCurrentTicketId,
  (ticketEntities, ticketId) => {
    return ticketId ? ticketEntities[ticketId] : emptyTicket;
  }
);
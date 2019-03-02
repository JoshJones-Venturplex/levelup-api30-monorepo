import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { Ticket } from '@workspace/core-data';
import { TicketService } from '@workspace/core-data';

import {
  AddTicket,
  DeleteTicket,
  TicketAdded,
  TicketDeleted,
  TicketsActionTypes,
  TicketsLoaded,
  TicketUpdated,
  LoadTickets,
  UpdateTicket,
} from './ticket.actions';
import { TicketsState } from './ticket.reducer';

@Injectable({providedIn: 'root'})
export class TicketsEffects {

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<TicketsState>,
    private ticketsService: TicketService
  ) {}
  
  @Effect() effect$ = this.actions$.pipe(ofType(TicketsActionTypes.TicketsAction));

  @Effect()
  loadTickets$ = this.dataPersistence.fetch(TicketsActionTypes.LoadTickets, {
    run: (action: LoadTickets, state: TicketsState) => {
      return this.ticketsService.getTickets().pipe(map((res: Ticket[]) => new TicketsLoaded(res)))
    },

    onError: (action: LoadTickets, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  addTicket$ = this.dataPersistence.pessimisticUpdate(TicketsActionTypes.AddTicket, {
    run: (action: AddTicket, state: TicketsState) => {
      return this.ticketsService.createTicket(action.payload).pipe(map((res: Ticket) => new TicketAdded(res)))
    },

    onError: (action: AddTicket, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  updateTicket$ = this.dataPersistence.pessimisticUpdate(TicketsActionTypes.UpdateTicket, {
    run: (action: UpdateTicket, state: TicketsState) => {
      return this.ticketsService.updateTicket(action.payload).pipe(map((res: Ticket) => new TicketUpdated(res)))
    },

    onError: (action: UpdateTicket, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  deleteTicket$ = this.dataPersistence.pessimisticUpdate(TicketsActionTypes.DeleteTicket, {
    run: (action: DeleteTicket, state: TicketsState) => {
      return this.ticketsService.deleteTicket(action.payload).pipe(map(_ => new TicketDeleted(action.payload)))
    },

    onError: (action: DeleteTicket, error) => {
      console.error('Error', error);
    }
  });
}
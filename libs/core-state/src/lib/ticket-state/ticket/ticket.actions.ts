import { Action } from '@ngrx/store';
import { Ticket } from '@workspace/core-data';

export enum TicketsActionTypes {
  TicketsAction = '[Tickets] Action',
  TicketSelected = '[Tickets] Selected',
  LoadTickets = '[Tickets] Load Data',
  TicketsLoaded = '[Tickets] Data Loaded',
  AddTicket = '[Tickets] Add Data',
  TicketAdded = '[Tickets] Data Added',
  UpdateTicket = '[Tickets] Update Data',
  TicketUpdated = '[Tickets] Data Updated',
  DeleteTicket = '[Tickets] Delete Data',
  TicketDeleted = '[Tickets] Data Deleted',
}

export class Tickets implements Action {
  readonly type = TicketsActionTypes.TicketsAction;
}

export class TicketSelected implements Action {
  readonly type = TicketsActionTypes.TicketSelected;
  constructor(public payload) { }
}

export class LoadTickets implements Action {
  readonly type = TicketsActionTypes.LoadTickets;
  constructor() { }
}

export class TicketsLoaded implements Action {
  readonly type = TicketsActionTypes.TicketsLoaded;
  constructor(public payload: Ticket[]) { }
}

export class AddTicket implements Action {
  readonly type = TicketsActionTypes.AddTicket;
  constructor(public payload: Ticket) { }
}

export class TicketAdded implements Action {
  readonly type = TicketsActionTypes.TicketAdded;
  constructor(public payload: Ticket) { }
}

export class UpdateTicket implements Action {
  readonly type = TicketsActionTypes.UpdateTicket;
  constructor(public payload: Ticket) { }
}

export class TicketUpdated implements Action {
  readonly type = TicketsActionTypes.TicketUpdated;
  constructor(public payload: Ticket) { }
}

export class DeleteTicket implements Action {
  readonly type = TicketsActionTypes.DeleteTicket;
  constructor(public payload: Ticket) { }
}

export class TicketDeleted implements Action {
  readonly type = TicketsActionTypes.TicketDeleted;
  constructor(public payload: Ticket) { }
}

export type TicketsActions = Tickets
  | TicketSelected
  | LoadTickets
  | TicketsLoaded
  | AddTicket
  | TicketAdded
  | UpdateTicket
  | TicketUpdated
  | DeleteTicket
  | TicketDeleted
;
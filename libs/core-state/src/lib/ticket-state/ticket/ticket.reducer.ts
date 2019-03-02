import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Ticket } from '@workspace/core-data';

import { TicketsActions, TicketsActionTypes } from './ticket.actions';

export interface TicketsState extends EntityState<Ticket> {
  selectedTicketId: string | null;
}

export const adapter: EntityAdapter<Ticket> = createEntityAdapter<Ticket>();
export const initialState: TicketsState = adapter.getInitialState({
  selectedTicketId: null,
});

export function ticketsReducer(state = initialState, action: TicketsActions): TicketsState {
  switch (action.type) {
    case TicketsActionTypes.TicketSelected: {
      return Object.assign({}, state, { selectedTicketId: action.payload });
    }

    case TicketsActionTypes.TicketsLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case TicketsActionTypes.TicketAdded: {
      return adapter.addOne(action.payload, state);
    }

    case TicketsActionTypes.TicketUpdated: {
      return adapter.upsertOne(action.payload, state);
    }

    case TicketsActionTypes.TicketDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedTicketId = (state: TicketsState) => state.selectedTicketId;

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectTicketIds = selectIds;

export const selectTicketEntities = selectEntities;

export const selectAllTickets = selectAll;

export const selectTicketTotal = selectTotal;
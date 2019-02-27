import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Ship } from '@workspace/core-data';

import { ShipActions, ShipActionTypes } from './ship.actions';

export interface ShipState extends EntityState<Ship> {
    selectedShipId: string | null;
}

export const adapter: EntityAdapter<Ship> = createEntityAdapter<Ship>({
    selectId: ship => ship.ship_id
});
export const initialState: ShipState = adapter.getInitialState({
    selectedShipId: null
});

export function shipReducer(state = initialState, action: ShipActions): ShipState {
    switch (action.type) {
        case ShipActionTypes.ShipSelected: {
            return Object.assign({}, state, { selectedShipId: action.payload });
        }

        case ShipActionTypes.ShipsLoaded: {
            return adapter.addAll(action.payload, state);
        }

        default:
            return state;
    }
}

export const getSelectedShipId = (state: ShipState) => state.selectedShipId;

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectShipIds = selectIds;

export const selectShipEntities = selectEntities;

export const selectAllShips = selectAll;

export const selectShipTotal = selectTotal;
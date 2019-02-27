import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromShip from './ship/ship.reducer';

import { Ship } from '@workspace/core-data';

export interface AppState {
    ships: fromShip.ShipState
}

export const reducers: ActionReducerMap<AppState> = {
    ships: fromShip.shipReducer
}

export const selectShipState = createFeatureSelector<fromShip.ShipState>('ships');

export const selectShipIds = createSelector(
    selectShipState,
    fromShip.selectShipIds
  );
  export const selectShipEntities = createSelector(
    selectShipState,
    fromShip.selectShipEntities
  );
  export const selectAllShips = createSelector(
    selectShipState,
    fromShip.selectAllShips
  );
  export const selectCurrentShipId = createSelector(
    selectShipState,
    fromShip.getSelectedShipId
  );
  
  const emptyShip: Ship = {
    ship_id: '',
    ship_name: '',
    ship_model: '',
    ship_type: '',
    roles: null,
    active: null,
    imo: null,
    mmsi: null,
    abs: null,
    class: null,
    weight_lbs: null,
    weight_kg: null,
    year_built: null,
    home_port: '',
    status: '',
    speed_kn: null,
    course_deg: null,
    position: {
      latitude: null,
      longitude: null,
    },
    successful_landings: null,
    attempted_landings: null,
    missions: null,
    url: '',
    image: '',
  }
  
  
  export const selectCurrentShip = createSelector(
    selectShipEntities,
    selectCurrentShipId,
    (shipEntities, shipId) => {
      return shipId ? shipEntities[shipId] : emptyShip;
    }
  );
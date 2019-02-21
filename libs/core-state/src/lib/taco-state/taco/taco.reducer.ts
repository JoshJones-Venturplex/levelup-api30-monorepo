import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Taco } from '@workspace/core-data';

import { TacoActions, TacoActionTypes } from './taco.actions';

export interface TacoState extends EntityState<Taco> {
    selectedTacoId: string | null;
}

export const adapter: EntityAdapter<Taco> = createEntityAdapter<Taco>();
export const initialState: TacoState = adapter.getInitialState({
    selectedTacoId: null
});

export function tacoReducer(state = initialState, action: TacoActions): TacoState {
    switch (action.type) {
        case TacoActionTypes.TacoSelected: {
            return Object.assign({}, state, { selectedTacoId: action.payload });
        }

        case TacoActionTypes.TacosLoaded: {
            return adapter.addAll(action.payload, state);
        }

        case TacoActionTypes.TacoAdded: {
            return adapter.addOne(action.payload, state);
        }

        case TacoActionTypes.TacoUpdated: {
            return adapter.upsertOne(action.payload, state);
        }

        case TacoActionTypes.TacoDeleted: {
            return adapter.removeOne(action.payload.id, state);
        }

        default:
            return state;
    }
}

export const getSelectedTacoId = (state: TacoState) => state.selectedTacoId;

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectTacoIds = selectIds;

export const selectTacoEntities = selectEntities;

export const selectAllTacos = selectAll;

export const selectTacoTotal = selectTotal;
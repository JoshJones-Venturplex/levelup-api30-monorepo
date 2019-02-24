import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Amiibo } from '@workspace/core-data';

import { AmiiboActions, AmiiboActionTypes } from './amiibo.actions';

export interface AmiiboState extends EntityState<Amiibo> {
    selectedAmiiboId: string | null;
}

export const adapter: EntityAdapter<Amiibo> = createEntityAdapter<Amiibo>({
    selectId: amiibo => amiibo.head
});
export const initialState: AmiiboState = adapter.getInitialState({
    selectedAmiiboId: null
});

export function amiiboReducer(state = initialState, action: AmiiboActions): AmiiboState {
    switch (action.type) {
        case AmiiboActionTypes.AmiiboSelected: {
            return Object.assign({}, state, { selectedAmiiboId: action.payload });
        }

        case AmiiboActionTypes.AmiibosLoaded: {
            return adapter.addAll(action.payload, state);
        }

        default:
            return state;
    }
}

export const getSelectedAmiiboId = (state: AmiiboState) => state.selectedAmiiboId;

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectAmiiboIds = selectIds;

export const selectAmiiboEntities = selectEntities;

export const selectAllAmiibos = selectAll;

export const selectAmiiboTotal = selectTotal;
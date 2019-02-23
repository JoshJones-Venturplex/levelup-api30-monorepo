import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { AuthActions, AuthActionTypes } from './auth.actions';

export interface AuthState extends EntityState<any> {
    isLoggedIn: boolean | null;
}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>({
    selectId: album => album.id
});
export const initialState: AuthState = adapter.getInitialState({
    isLoggedIn: false
})
export function authReducer(state = initialState, action: AuthActions): AuthState {
    switch (action.type) {
        case AuthActionTypes.LoginSuccess:
            return { ...state, isLoggedIn: true };
        
        case AuthActionTypes.LogoutConfirmed:
            return initialState;
        
        default:
            return state;
    }
}

export const selectIsLoggedIn = (state: AuthState) => state.isLoggedIn;
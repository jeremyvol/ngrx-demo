import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUser from '../comp3/user-store/user.reducer';

export interface State {
  user: fromUser.UserState;
}

export const reducers: ActionReducerMap<State, any> = {
  user: fromUser.userReducer
};

export const getUserState = createFeatureSelector<fromUser.UserState>('user');
export const getFirstname = createSelector(
  getUserState,
  fromUser.getFirstname
);
export const getLastname = createSelector(
  getUserState,
  fromUser.getLastname
);


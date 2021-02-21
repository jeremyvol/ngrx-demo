import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUser from '../store/user-store/user.reducer';
import * as fromCounter from '../store/counter-store/counter.reducer';

export interface State {
  counter: fromCounter.CounterState
  user: fromUser.UserState;
}

export const reducers: ActionReducerMap<State, any> = {
  counter: fromCounter.counterReducer,
  user: fromUser.userReducer
};

export const getCounterState = createFeatureSelector<fromCounter.CounterState>('counter');
export const getCounter = createSelector(
  getCounterState,
  fromCounter.getCounter
);

export const getUserState = createFeatureSelector<fromUser.UserState>('user');
export const getFirstname = createSelector(
  getUserState,
  fromUser.getFirstname
);
export const getLastname = createSelector(
  getUserState,
  fromUser.getLastname
);


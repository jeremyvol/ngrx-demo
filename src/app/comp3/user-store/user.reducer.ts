import {
  UserActions,
  SET_FIRSTNAME,
  SET_LASTNAME
} from './user.actions';

///////////////////////////////////////////////////////////////////////////////

export interface UserState {
  firstname: String;
  lastname: String;
}

export const initialState: UserState = {
  firstname: 'Jeremy',
  lastname: 'Vollant'
};

///////////////////////////////////////////////////////////////////////////////

export function userReducer(
  state = initialState,
  action: UserActions
) {
  switch (action.type) {
    case SET_FIRSTNAME:
      return {
        ...state,
        firstname: action.payload
      };
    case SET_LASTNAME:
      return {
        ...state,
        lastname: action.payload
      };
    default:
      return state;
  }
}

export const getFirstname = (state: UserState) => state.firstname;
export const getLastname = (state: UserState) => state.lastname;

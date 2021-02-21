import {
  UserActions,
  SET_FIRSTNAME,
  SET_LASTNAME,
  SET_USER
} from './user.actions';

///////////////////////////////////////////////////////////////////////////////
//              Etape 1 : creation de la tranche de state                    //
///////////////////////////////////////////////////////////////////////////////

export interface UserState {
  firstname: string;
  lastname: string;
}

export const initialState: UserState = {
  firstname: 'Jeremy',
  lastname: 'Vollant'
};

///////////////////////////////////////////////////////////////////////////////
//              Etape 3 : reducer de la tranche                              //
///////////////////////////////////////////////////////////////////////////////

export function userReducer(
  state = initialState,
  action: UserActions
) {
  switch (action.type) {
    case SET_FIRSTNAME:
      console.log("🚀 ~ file: user.reducer.ts ~ line 38 ~ action.payload", action.payload);
      return {
        ...state,
        firstname: action.payload
      };
    case SET_LASTNAME:
      return {
        ...state,
        lastname: action.payload
      };
    case SET_USER:
      return {
        firstname: action.payload.firstname,
        lastname: action.payload.lastname
      };
    default:
      return state;
  }
}

export const getFirstname = (state: UserState) => state.firstname;
export const getLastname = (state: UserState) => state.lastname;

// export const getUser = (state: UserState) => ({ ...state });

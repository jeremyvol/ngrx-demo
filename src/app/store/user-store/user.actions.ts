import { Action } from '@ngrx/store';

///////////////////////////////////////////////////////////////////////////////
//              Etape 2 : creation des action sur la tranche                 //
///////////////////////////////////////////////////////////////////////////////

export const SET_FIRSTNAME = '[User] Set firstname';
export const SET_LASTNAME = '[User] Set lastname';
export const SET_USER = '[User] Set user';

// peut etre une enum
// export enum ActionTypes {
//   ACTION1 = '[Tranche] action 1',
//   ACTION2 = '[Tranche] action 2'
//   ACTION3 = '[Tranche] action 3'
// }

// les classes associees aux actions servent a definir le type de payload associe a cette action
export class SetFirstname implements Action {
  readonly type = SET_FIRSTNAME;
  constructor(public payload: string) { }
}
export class SetLastname implements Action {
  readonly type = SET_LASTNAME;
  constructor(public payload: string) { }
}

export class SetUser implements Action {
  readonly type = SET_USER;
  constructor(
    public payload: {
      firstname: string;
      lastname: string;
    }
  ) { }
}

export type UserActions = SetFirstname | SetLastname | SetUser;

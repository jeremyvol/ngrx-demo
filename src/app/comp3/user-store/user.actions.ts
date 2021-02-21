import { Action } from '@ngrx/store';

export const SET_FIRSTNAME = '[User] Set firstname';
export const SET_LASTNAME = '[User] Set lastname';

export class SetFirstname implements Action {
  readonly type = SET_FIRSTNAME;
  constructor(public payload: String) { }
}
export class SetLastname implements Action {
  readonly type = SET_LASTNAME;
  constructor(public payload: String) { }
}

export type UserActions = SetFirstname | SetLastname;

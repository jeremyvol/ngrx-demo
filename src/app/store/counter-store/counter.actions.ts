import { Action } from '@ngrx/store';

///////////////////////////////////////////////////////////////////////////////
//              Etape 2 : creation des action sur la tranche                 //
///////////////////////////////////////////////////////////////////////////////

export const INCREMENT = '[Counter] Increment';
export const DECREMENT = '[Counter] Decrement';
export const RESET = '[Counter] Reset';


export class Increment implements Action {
  readonly type = INCREMENT;
  constructor() { }
}

export class Decrement implements Action {
  readonly type = DECREMENT;
  constructor() { }
}

export class Reset implements Action {
  readonly type = RESET;
  constructor() { }
}

export type CounterActions = Increment | Decrement | Reset;

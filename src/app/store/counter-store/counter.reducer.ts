import {
  CounterActions,
  INCREMENT,
  DECREMENT,
  RESET
} from './counter.actions';

///////////////////////////////////////////////////////////////////////////////
//              Etape 1 : creation de la tranche de state                    //
///////////////////////////////////////////////////////////////////////////////

export interface CounterState {
  counter: number;
}

export const initialState: CounterState = {
  counter: 42
};

///////////////////////////////////////////////////////////////////////////////
//              Etape 3 : reducer de la tranche                              //
///////////////////////////////////////////////////////////////////////////////

export function counterReducer(
  state = initialState,
  action: CounterActions
) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case RESET:
      return {
        ...state,
        counter: 0
      }
    default:
      return state;
  }
}

export const getCounter = (state: CounterState) => state.counter;

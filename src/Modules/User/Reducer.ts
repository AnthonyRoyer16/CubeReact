import { Action, State } from "./Types";
import { FETCH, SUCCESS, ERROR, RESET_STATE } from "./Actions";

const InitialState = {
  user: {},
  loading: false,
  error: false,
  status: null,
};

const Reducer = (state: State = InitialState, action: Action) => {
  switch (action.type) {
    case FETCH: {
      return { ...state, loading: true };
    }
    case SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        user: action.payload,
      };
    }
    case ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        status: action.payload,
      };
    }
    case RESET_STATE: {
      return {
        ...state,
        successUpdate: false,
        error: false,
        status: null,
      };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

export { Reducer, InitialState };

import { Action, State } from "./Types";
import { LOGIN, LOGOUT, SUCCESS, ERROR, RESET_STATE } from "./Actions";
import { getToken } from "../../Core/Token";
//import { getToken } from "../../Core/token";

const InitialState = {
  auth: Boolean(getToken()),
  loading: false,
  error: false,
  status: null,
};

const Reducer = (state: State = InitialState, action: Action) => {
  switch (action.type) {
    case LOGIN: {
      return { ...state, loading: true, error: false };
    }
    case LOGOUT: {
      return {
        ...state,
        auth: false,
        isexpired: false,
        loading: false,
        error: false,
      };
    }
    case SUCCESS: {
      return {
        auth: true,
        loading: false,
        error: false,
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

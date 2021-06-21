import React, { createContext, useReducer, useCallback } from "react";
import { Reducer, InitialState } from "./Reducer";
import { Props, State, Dispatch, Request, Response } from "./Types";
import {
  UPDATE,
  DELETE,
  SUCCESS,
  ERROR,
  RESET_STATE,
} from "./Actions";
import { fetch } from "core/services";
import { clear } from "core/tools";

const endpoint = "auth";

const Context = createContext<State | undefined>(undefined);
const DispatchContext = createContext<Dispatch | undefined>(undefined);

const Provider: React.FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  const middlewareDispatch = useCallback(async (action) => {
    switch (action.type) {
      case UPDATE: {
        const method = "post";
        try {
          dispatch({
            type: LOGIN,
          });
          const request: Request = action.payload;
          const response: Response = await fetch(method, endpoint, request);
          const { token, expired } = response.body;
          if (token) {
            localStorage.setItem("token", token);
            localStorage.setItem("expired", expired);
            dispatch({
              type: SUCCESS,
            });
          }
        } catch (error) {
          dispatch({
            type: ERROR,
            payload: error.status,
          });
        }
        dispatch({
          type: RESET_STATE,
        });
        break;
      }
      default:
        dispatch(action);
        break;
    }
  }, []);

  return (
    <Context.Provider value={state}>
      <DispatchContext.Provider value={middlewareDispatch}>
        {children}
      </DispatchContext.Provider>
    </Context.Provider>
  );
};

export { Provider, Context, DispatchContext };

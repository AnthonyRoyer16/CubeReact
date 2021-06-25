import React, { createContext, useReducer, useCallback } from "react";
import { Reducer, InitialState } from "./Reducer";
import { Props, State, Dispatch } from "./Types";
import {
  FETCH,
  GET_RESSOURCES,
  SEARCH,
  SUCCESS_SEARCH,
  ERROR,
  UPDATE,
  DELETE,
  RESET_STATE,
  SUCCESS,
} from "./Actions";
import { fetch } from "../../Core/Services";
import { clear } from "../../Core/Tools";

const endpoint = "account";
const endpointMail = "mail/feedback";

const Context = createContext<State | undefined>(undefined);
const DispatchContext = createContext<Dispatch | undefined>(undefined);

const Provider: React.FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  const middlewareDispatch = useCallback(async (action) => {
    switch (action.type) {
      case GET_RESSOURCES: {
        try {
          dispatch({
            type: FETCH,
          });
          //const response: any = await fetch("get", endpoint);
          const response: any = [{test:"test"}];
          //console.log(response)
          dispatch({
            type: SUCCESS,
            payload: response,
          });
        } catch (error) {
          dispatch({
            type: ERROR,
            payload: error.status,
          });
        }
        break;
      }
      case SEARCH: {
        try {
          dispatch({
            type: FETCH,
          });
          dispatch({
            type: SUCCESS_SEARCH,
            payload: action.payload,
          });
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
      case UPDATE: {
        try {
          dispatch({
            type: FETCH,
          });
          //const response: any = await fetch("put", endpoint, action.payload);
          dispatch({
            type: SUCCESS,
            payload: action.payload,
          });
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
      case DELETE: {
        try {
          dispatch({
            type: FETCH,
          });
          await fetch("delete", endpoint);
          if (action.payload.content) {
            await fetch("post", endpointMail, action.payload);
          }
          clear();
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

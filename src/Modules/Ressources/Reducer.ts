import { Action, State } from "./Types";
import { FETCH, SUCCESS, SUCCESS_SEARCH, ERROR, RESET_STATE } from "./Actions";

const InitialState = {
  ressources: [
    {
      id:"1",
      title:"Title1",
      desc:"desc",
      upload:"25 janvier 2022",
      type:"image",
      metaData:{
        view:"10",
        like:"5",
        fav:"2"
    },
  },
  {
    id:"2",
    title:"Title2",
    desc:"desc",
    upload:"25 janvier 2022",
    type:"image",
    metaData:{
      view:"10",
      like:"5",
      fav:"2"
  },
  },
  {
    id:"2",
    title:"Title2",
    desc:"desc",
    upload:"25 janvier 2022",
    type:"image",
    metaData:{
      view:"10",
      like:"5",
      fav:"2"
  },
  },
  {
    id:"2",
    title:"Title2",
    desc:"desc",
    upload:"25 janvier 2022",
    type:"image",
    metaData:{
      view:"10",
      like:"5",
      fav:"2"
  },
  },
  {
    id:"2",
    title:"Title2",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit in diam malesuada vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec congue lacus at leo viverra volutpat nec sit amet tortor. Sed facilisis venenatis elit vel viverra. ",
    upload:"25 janvier 2022",
    type:"image",
    metaData:{
      view:"10",
      like:"5",
      fav:"2"
  },
  },
  ],
  search: "",
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
        ressources: action.payload,
      };
    }
    case SUCCESS_SEARCH: {
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        search: action.payload,
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

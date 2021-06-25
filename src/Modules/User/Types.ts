export type Props = {
  children: React.ReactNode;
};

export type State = {
  user: object;
  loading?: boolean;
  error?: boolean;
  status?: any;
};

export type Dispatch = (action: Action) => void;

export type Action = {
  type:
    | "FETCH"
    | "GET_ACCOUNT"
    | "UPDATE"
    | "SIGN_OUT"
    | "LOGIN"
    | "LOGOUT"
    | "AUTHENTICATE"
    | "SUCCESS"
    | "ERROR"
    | "RESET_STATE";
  payload?: any;
};


export type Props = {
  children: React.ReactNode;
};

export type State = {
  auth: boolean;
  loading?: boolean;
  error?: boolean;
  status?: any;
};

export type Dispatch = (action: Action) => void;

export type Action = {
  type:
    | "SIGN_IN"
    | "SIGN_OUT"
    | "LOGIN"
    | "LOGOUT"
    | "AUTHENTICATE"
    | "SUCCESS"
    | "ERROR"
    | "RESET_STATE";
  payload?: any;
};

export type Request = {
  email: string;
  password: string;
};

export type Response = {
  body: { token: string; expired: string };
};

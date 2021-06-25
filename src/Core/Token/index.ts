import jwt from "jwt-decode";
import { isUpper } from "../Times/index";
import { clear } from "../Tools/index";

export const getToken = (): string | null => localStorage.getItem("token");

export const hasToken = () => Boolean(getToken()!);

export const parseToken = (key: string): any => {
  const keys: any = jwt(getToken()!);
  return keys[key] || null;
};

export const notExpired = () => {
  if (isUpper(Number(localStorage.getItem("expired")))) {
    return true;
  } else {
    clear();
    return false;
  }
};

export const isAccount = () => {
  const { pid }: { pid: string } = jwt(getToken()!);
  return pid ? false : true;
};

export const isCustom = () => {
  const { custom }: { custom: boolean } = jwt(getToken()!);
  return custom ? true : false;
};

export const hasFirstConnection = () => {
  const { scopes }: { scopes: any } = jwt(getToken()!);
  return Object.keys(scopes).length === 1 ? false : true;
};

export const getUid = () => {
  const { uid }: { uid: any } = jwt(getToken()!);
  return uid;
};

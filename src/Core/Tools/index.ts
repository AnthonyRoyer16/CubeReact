import jwt from "jwt-decode";
import { message } from "antd";

export const isEmpty = (obj: any) => {
  return Object.keys(obj).length === 0;
};

export function getToken() {
  return localStorage.getItem("token");
}

export const parseToken = (key: string): any => {
  const keys: any = jwt(getToken()!);
  return keys[key] || null;
};

export const clear = () => {
  localStorage.clear();
  window.location.reload();
};

export function checkCase(c: string) {
  const u = c.toUpperCase();
  return c.toLowerCase() === u ? -1 : c === u ? 1 : 0;
}

export function isConnected() {
  return localStorage.getItem("token") != null &&
    localStorage.getItem("token") !== undefined
    ? true
    : false;
}

export const successMessage = (displayedMessage: string) => {
  message.success(displayedMessage);
};

export const errorMessage = (displayedMessage: string) => {
  message.error(displayedMessage);
};
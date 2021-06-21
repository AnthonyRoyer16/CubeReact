import { useContext } from "react";
import { Context, DispatchContext } from "./Provider";

const useState = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a Auth Provider");
  }
  return context;
};

const useDispatch = () => {
  const context = useContext(DispatchContext);
  if (context === undefined) {
    throw new Error("useAuthtDispatch must be used within a Auth Provider");
  }
  return context;
};

export { useState, useDispatch };

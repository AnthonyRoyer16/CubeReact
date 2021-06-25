import { useContext } from "react";
import { Context, DispatchContext } from "./Provider";

const useState = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useRessourcesState must be used within a User Provider");
  }
  return context;
};

const useDispatch = () => {
  const context = useContext(DispatchContext);
  if (context === undefined) {
    throw new Error("useRessourcesDispatch must be used within a User Provider");
  }
  return context;
};

export { useState, useDispatch };

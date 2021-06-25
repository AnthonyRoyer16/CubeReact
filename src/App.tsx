import React, { ComponentProps, FC } from "react";
import Routes from "./Route";

import "antd/dist/antd.css";
import "./App.css";

import {
  AuthProvider,
  RessourcesProvider,
  UserProvider,
} from "./Modules/Index";

type ProviderProps = {
  children: React.ReactNode;
};

const combineProviders = (
  ...components: FC<ProviderProps>[]
): FC<ProviderProps> => {
  return components.reverse().reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }: ComponentProps<FC>): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => <>{children}</>
  );
};

const AppProvider = combineProviders(
  AuthProvider,
  UserProvider,
  RessourcesProvider,
);

const App: React.FC = (): JSX.Element => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};

export default App;

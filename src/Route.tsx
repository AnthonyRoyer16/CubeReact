import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";

import {
  PageAccount,
  PageAccountLogged,
  PageHome,
  PageRegister,
} from "./Page";

import { useAuthState } from "./Modules/Auth";
import {  notExpired, hasFirstConnection } from "./Core/Token";
//notExpired, ^
interface RouteProps {
  Component: React.FC<RouteComponentProps>;
  path: string;
  exact?: boolean;
}

const PrivateRoute = ({
  Component,
  path,
  exact = false,
}: RouteProps): JSX.Element => {
  const { auth }: { auth: boolean } = useAuthState();
  return (
    <Route
      exact={exact}
      path={path}
      render={(props: RouteComponentProps) =>
        auth && notExpired() && (
          <PageHome />
        )}
    />
  );
};

const PublicRoute = ({
  Component,
  path,
  exact = false,
}: RouteProps): JSX.Element => {
  const { auth }: { auth: boolean } = useAuthState();
  return (
    <Route
      exact={exact}
      path={path}
      render={(props: RouteComponentProps) =>
        auth && notExpired() ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const Routes: React.FC = (): JSX.Element => {
  return (
    <Router>
    <Switch>
      <Route path="/signIn">
        <PageRegister />
      </Route>
      <Route path="/accountLogged">
        <PageAccountLogged />
      </Route>
      <Route path="/account">
        <PageAccount />
      </Route>
      <Route path="/">
        <PageHome />
      </Route>
    </Switch>
</Router>
  );
};

export default Routes;

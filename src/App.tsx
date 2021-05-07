import {PageTest} from "./Page/PageTest/PageTest"
import {PageAccount} from "./Page/PageAccount/PageAccount"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/account">
            <PageAccount />
          </Route>
          <Route path="/">
            <PageTest />
          </Route>
        </Switch>
    </Router>
  );
}
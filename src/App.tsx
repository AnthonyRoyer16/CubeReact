import {PageHome, PageAccount, PageAccountLogged, PageRegister} from "./Page"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
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
}
import {PageHome} from "./Page/PageHome/PageHome"
import {PageAccount} from "./Page/PageAccount/PageAccount"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Switch>
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
import "./App.css";
import PlanLayout from "./pages/Layouts/PlanLayout";
import Welcome from "./pages/Welcome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";
import AllowNotification from "./pages/AllowNotification";
import AppLayout from "./pages/Layouts/AppLayout";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Route
          exact
          path={[
            "/",
            "/invite",
            "/get_username",
            "/code_confirm",
            "/allow_notification",
          ]}
        >
          <PlanLayout>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/invite" component={PhoneConfirmation} />
              <Route exact path="/code_confirm" component={CodeConfirm} />
              <Route
                exact
                path="/allow_notification"
                component={AllowNotification}
              />
            </Switch>
          </PlanLayout>
        </Route>
        <Route exact path={["/home"]}>
          <AppLayout>
            <Switch>
              <Route exact path="/home" component={() => <Home />} />
            </Switch>
          </AppLayout>
        </Route>
      </Router>
    </div>
  );
}

export default App;

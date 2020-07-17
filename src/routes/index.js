import React from "react";
import { Route, Switch, Redirect } from "react-router";

// Private Route
import { PrivateRoute } from "./PrivateRoute";

// ----------- Static Pages ---------------
import Home from "./Home";
import Login from "./Login";


//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
const getRoutes = () => {
  return (
    <Switch>
      <PrivateRoute path="/" component={Home} exact />
      <Route path="/login" component={Login} exact />

      {/*    404    */}
      <Redirect to="/pages/error-404" />
    </Switch>
  );
};

export { getRoutes };

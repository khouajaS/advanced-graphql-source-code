import React from "react";
import { Route, Switch } from "react-router";

import Home from "../pages/Home";
import Index from "../pages/Index";
import Login from "../pages/Login";
import PrivateRoute from "../components/PrivateRoute";
import Profile from "../pages/Profile";
import ProfileSettings from "../pages/Settings/Profile";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Index} />
    <PrivateRoute exact path="/home" component={Home} />
    <Route exact path="/login" component={Login} />
    <PrivateRoute exact path="/profile" component={Profile} />
    <PrivateRoute
      exact
      path="/settings/profile"
      render={props => [
        <Profile key="profile" {...props} />,
        <ProfileSettings key="profile-settings" {...props} />
      ]}
    />
  </Switch>
);

export default Routes;
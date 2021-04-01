import React from "react";
import { Switch, Route } from "react-router-dom";
import UserInformation from "../views/User/UserInformation";
import PrivateRoute from "./PrivateRoute";
import Error from "../views/ErrorPage/Error";
import Home from "../views/Home";
import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";
import StepsRoutes from "./StepsRoutes";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>

      <PrivateRoute exact path="/user" component={UserInformation} />
      <StepsRoutes />
      <Route component={Error} />
    </Switch>
  );
};

export default Routes;

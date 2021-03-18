import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserInformation from "../components/pages/User/UserInformation";
import PrivateRoute from "./PrivateRoute";
import Error from "../components/pages/ErrorPage/Error";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Auth/Login";
import Register from "../components/pages/Auth/Register";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>

        <PrivateRoute exact path="/user" component={UserInformation} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
};

export default Routes;

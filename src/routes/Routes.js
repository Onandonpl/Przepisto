import React from "react";
import { Switch, Route } from "react-router-dom";
import UserInformation from "../views/User/UserInformation";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../views/ErrorPage";
import Home from "../views/Home";
import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";
import {
  Images,
  Ingredients,
  Instruction,
  Name,
  Tags,
  Finish,
} from "../views/RecipeAdd";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>
      <PrivateRoute exact path="/user" component={UserInformation} />
      <PrivateRoute exact path="/recipe-name" component={Name}></PrivateRoute>
      <PrivateRoute
        exact
        path="/recipe-finish"
        component={Finish}
      ></PrivateRoute>
      <PrivateRoute exact path="/recipe-tags" component={Tags}></PrivateRoute>
      <PrivateRoute
        exact
        path="/recipe-ingredients"
        component={Ingredients}
      ></PrivateRoute>
      <PrivateRoute
        exact
        path="/recipe-steps"
        component={Instruction}
      ></PrivateRoute>
      <PrivateRoute
        exact
        path="/recipe-images"
        component={Images}
      ></PrivateRoute>{" "}
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default Routes;

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const currentUser = useAuth();
  const { user, isLogged } = currentUser;
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!user && isLogged ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRoute;

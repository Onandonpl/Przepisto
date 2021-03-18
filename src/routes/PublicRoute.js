import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PublicRoute = ({ component: RouteComponent, restricted, ...rest }) => {
  const currentUser = useAuth();

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? <Redirect to="/" /> : <RouteComponent {...routeProps} />
      }
    />
  );
};

export default PublicRoute;

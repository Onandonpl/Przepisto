import React from "react";
import PrivateRoute from "./PrivateRoute";

import { RecipeAddProvider } from "../context/RecipeAddContext";
import {
  Images,
  Ingredients,
  Instruction,
  Name,
  Tags,
} from "../views/RecipeAdd";
const StepsRoutes = () => {
  return (
    <RecipeAddProvider>
      <PrivateRoute exact path="/recipe-name" component={Name}></PrivateRoute>
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
      ></PrivateRoute>
    </RecipeAddProvider>
  );
};

export default StepsRoutes;

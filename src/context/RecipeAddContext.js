import React, { useReducer, useContext, createContext } from "react";
import { recipeAddReducer, initialState } from "../reducers/recipeAddReducer";

const RecipeAddContext = createContext();
const RecipeAddDispatchContext = createContext();

export const RecipeAddProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipeAddReducer, initialState);

  return (
    <RecipeAddDispatchContext.Provider value={dispatch}>
      <RecipeAddContext.Provider value={state}>
        {children}
      </RecipeAddContext.Provider>
    </RecipeAddDispatchContext.Provider>
  );
};

export const useRecipeAdd = () => {
  return useContext(RecipeAddContext);
};
export const useDispatchRecipeAdd = () => {
  return useContext(RecipeAddDispatchContext);
};

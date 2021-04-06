import React, { useState, useContext, createContext, useEffect } from "react";

import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../lib/firebase";

const RecipesContext = createContext();

const emptyRecipes = { recipes: [] };
export const initialState = () => {
  const recipesFromLocalStorage = JSON.parse(localStorage.getItem("recipes"));
  if (recipesFromLocalStorage) {
    return recipesFromLocalStorage;
  } else {
    return emptyRecipes;
  }
};

export const RecipesProvider = ({ children }) => {
  const [state, setState] = useState(initialState());
  const [value, loading, error] = useCollection(
    firebase.firestore().collection("recipes")
  );

  const setLocalStorageRecipes = (recipesFromFirebase) => {
    const recipes = {
      recipes: recipesFromFirebase,
    };

    localStorage.setItem("recipes", JSON.stringify(recipes));
  };

  useEffect(() => {
    if (value) {
      const recipes = value.docs.map((recipe) => {
        return { recipeData: recipe.data(), recipeID: recipe.id };
      });

      setState({
        recipes: recipes,
      });

      setLocalStorageRecipes(recipes);
    }
  }, [value]);

  return (
    <RecipesContext.Provider value={state}>{children}</RecipesContext.Provider>
  );
};

export const useRecipes = () => {
  return useContext(RecipesContext);
};

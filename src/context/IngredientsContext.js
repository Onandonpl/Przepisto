import React, { useReducer, useContext, createContext, useEffect } from "react";
import {
  ingredientsReducer,
  initialState,
} from "../reducers/ingredientsReducer";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../lib/firebase";

const IngredientsContext = createContext();
const IngredientsDispatchContext = createContext();

export const IngredientsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ingredientsReducer, initialState());
  const [value, loading, error] = useCollection(
    firebase.firestore().collection("ingredients")
  );

  const setLocalStorageTags = (ingredientsFromFirebase) => {
    const ingredients = {
      ingredients: ingredientsFromFirebase,
    };

    localStorage.setItem("ingredients", JSON.stringify(ingredients));
  };

  useEffect(() => {
    if (value) {
      const ingredients = value.docs.map((ingredient) => ingredient.data());
      dispatch({ type: "SET_INGREDIENTS", payload: ingredients });
      setLocalStorageTags(ingredients);
    }
  }, [value]);

  return (
    <IngredientsDispatchContext.Provider value={dispatch}>
      <IngredientsContext.Provider value={state}>
        {children}
      </IngredientsContext.Provider>
    </IngredientsDispatchContext.Provider>
  );
};

export const useIngredients = () => {
  return useContext(IngredientsContext);
};
export const useDispatchIngredients = () => {
  return useContext(IngredientsDispatchContext);
};

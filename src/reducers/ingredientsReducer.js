import { db } from "../lib/firebase";
const emptyIngredients = { ingredients: [] };

const handleAddIngredient = (data) => {
  db.collection("ingredients").doc().set(data);
};

export const ingredientsReducer = (state, action) => {
  switch (action.type) {
    case "SET_INGREDIENTS":
      return { ...state, ingredients: action.payload };
    case "ADD_INGREDIENT":
      handleAddIngredient({
        name: action.payload.name,
        unit: action.payload.unit,
      });
      return { ...state };

    default:
      throw new Error(`Unknown action ${action.type}`);
  }
};

export const initialState = () => {
  const ingredientsFromLocalStorage = JSON.parse(
    localStorage.getItem("ingredients")
  );
  if (ingredientsFromLocalStorage) {
    return ingredientsFromLocalStorage;
  } else {
    return emptyIngredients;
  }
};

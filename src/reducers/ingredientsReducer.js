const emptyIngredients = { ingredients: [] };

export const ingredientsReducer = (state, action) => {
  switch (action.type) {
    case "SET_INGREDIENTS":
      return { ...state, ingredients: action.payload };

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

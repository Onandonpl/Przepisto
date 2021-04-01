import { db } from "../lib/firebase";

const handleAddRecipe = (data) => {
  console.log(data);
  db.collection("recipes").doc().set(data);
};

export const recipeAddReducer = (state, action) => {
  switch (action.type) {
    // case "SUBMIT":
    //   handleAddRecipe({
    //     ...state,
    //     authorID: action.payload.authorID,
    //     authorDisplayName: action.payload.authorDisplayName,
    //     difficulty: action.payload.difficulty,
    //     persons: action.payload.persons,
    //     preparationTime: action.payload.preparationTime,
    //     name: action.payload.name,
    //   });
    //   return initialState;
    case "SUBMIT":
      return {
        ...state,
        authorID: action.payload.authorID,
        authorDisplayName: action.payload.authorDisplayName,
        difficulty: action.payload.difficulty,
        persons: action.payload.persons,
        preparationTime: action.payload.preparationTime,
        name: action.payload.name,
      };
    case "ADD_INGREDIENT":
      return { ...state, ingredients: [action.payload, ...state.ingredients] };
    case "DELETE_INGREDIENT":
      return {
        ...state,
        ingredients: state.ingredients.filter((item, index) => {
          return index !== action.payload;
        }),
      };
    case "ADD_TAG":
      return { ...state, tags: [action.payload, ...state.tags] };
    case "ADD_IMAGE":
      return { ...state, images: [{ url: action.payload }, ...state.images] };
    case "ADD_STEP":
      return { ...state, steps: [action.payload, ...state.steps] };

    default:
      throw new Error(`Unknown action ${action.type}`);
  }
};

export const initialState = {
  name: "",
  authorID: "",
  authorDisplayName: "",
  difficulty: 1,
  persons: 1,
  preparationTime: 10,
  images: [],
  tags: [],
  ingredients: [],
  steps: [],
};

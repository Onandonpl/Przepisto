const emptyTags = { tags: [] };

export const tagsReducer = (state, action) => {
  switch (action.type) {
    case "SET_TAGS":
      return { ...state, tags: action.payload };
    default:
      throw new Error(`Unknown action ${action.type}`);
  }
};

export const initialState = () => {
  const tagsFromLocalStorage = JSON.parse(localStorage.getItem("tags"));
  if (tagsFromLocalStorage) {
    return tagsFromLocalStorage;
  } else {
    return emptyTags;
  }
};

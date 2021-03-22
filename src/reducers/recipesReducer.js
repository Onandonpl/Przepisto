const emptyTags = { tags: [] };

export const tagsReducer = (state, action) => {
  switch (action.type) {
    case "GET_TAGS":
      return { ...state, tags: action.payload };

    case "STATE":
      return {
        ...state,
        filtered: state.tags.filter((item) => item.name === action.payload),
      };

    default:
      throw new Error(`Unknown action ${action.type}`);
  }
};

export const initialState = () => {
  //   const userFromLocalStorage = JSON.parse(localStorage.getItem("authUser"));
  //   if (userFromLocalStorage) {
  //     return userFromLocalStorage;
  //   } else {
  return emptyTags;
  //   }
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "SUCCES_LOGIN":
      return {
        user: action.payload.uid,
        displayName: action.payload.displayName,
        loading: false,
        error: false,
      };

    case "LOGOUT":
      return {
        user: null,
        displayName: null,
        loading: true,
        error: false,
      };

    default:
      throw new Error(`Unknown action ${action.type}`);
  }
};

export const initialState = () => {
  const userFromLocalStorage = JSON.parse(localStorage.getItem("authUser"));
  const emptyUser = {
    user: null,
    displayName: null,
    loading: true,
    error: false,
  };
  if (userFromLocalStorage) {
    return userFromLocalStorage;
  } else {
    return emptyUser;
  }
};

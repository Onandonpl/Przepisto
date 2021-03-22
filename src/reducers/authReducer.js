const emptyUser = {
  user: null,
  displayName: null,
  loading: true,
  error: false,
  isLogged: false,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "SUCCES_LOGIN":
      return {
        user: action.payload.uid,
        displayName: action.payload.displayName,
        loading: false,
        error: false,
        isLogged: true,
      };

    case "LOGOUT":
      return emptyUser;

    default:
      throw new Error(`Unknown action ${action.type}`);
  }
};

export const initialState = () => {
  const userFromLocalStorage = JSON.parse(localStorage.getItem("authUser"));
  if (userFromLocalStorage) {
    return userFromLocalStorage;
  } else {
    return emptyUser;
  }
};

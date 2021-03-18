import React, { useReducer, useContext, createContext, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { authReducer, initialState } from "../reducers/authReducer";

const AuthContext = createContext();
const AuthDispatchContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState());
  const [user, loading] = useAuthState(auth);

  const setLocalStorageUser = (newUser) => {
    return localStorage.setItem(
      "authUser",
      JSON.stringify({
        user: newUser.uid,
        displayName: newUser.displayName,
        loading: false,
        error: false,
      })
    );
  };

  useEffect(() => {
    if (!loading && user && !state.user) {
      setLocalStorageUser(user);
      dispatch({ type: "SUCCES_LOGIN", payload: user });
    }
  }, [user]);

  return (
    <AuthDispatchContext.Provider value={dispatch}>
      <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
    </AuthDispatchContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
export const useDispatchAuth = () => {
  return useContext(AuthDispatchContext);
};

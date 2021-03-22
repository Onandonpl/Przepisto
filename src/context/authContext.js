import React, { useReducer, useContext, createContext } from "react";
import { authReducer, initialState } from "../reducers/authReducer";

const AuthContext = createContext();
const AuthDispatchContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState());

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

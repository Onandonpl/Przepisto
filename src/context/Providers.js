import React from "react";
import { AuthProvider } from "./AuthContext";
import { TagsProvider } from "./TagsContext";
import { IngredientsProvider } from "./IngredientsContext";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <TagsProvider>
        <IngredientsProvider>{children}</IngredientsProvider>
      </TagsProvider>
    </AuthProvider>
  );
};

export default Providers;

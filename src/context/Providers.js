import React from "react";
import { AuthProvider } from "./AuthContext";
import { TagsProvider } from "./TagsContext";
import { IngredientsProvider } from "./IngredientsContext";
import { RecipeAddProvider } from "./RecipeAddContext";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <RecipeAddProvider>
        <TagsProvider>
          <IngredientsProvider>{children}</IngredientsProvider>
        </TagsProvider>
      </RecipeAddProvider>
    </AuthProvider>
  );
};

export default Providers;

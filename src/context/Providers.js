import React from "react";
import { AuthProvider } from "./AuthContext";
import { TagsProvider } from "./TagsContext";
import { IngredientsProvider } from "./IngredientsContext";
import { RecipeAddProvider } from "./RecipeAddContext";
import { RecipesProvider } from "./RecipesContext";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <RecipesProvider>
        <RecipeAddProvider>
          <TagsProvider>
            <IngredientsProvider>{children}</IngredientsProvider>
          </TagsProvider>
        </RecipeAddProvider>
      </RecipesProvider>
    </AuthProvider>
  );
};

export default Providers;

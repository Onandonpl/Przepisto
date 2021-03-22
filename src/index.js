import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./context/AuthContext";
import { TagsProvider } from "./context/TagsContext";
import { IngredientsProvider } from "./context/IngredientsContext";
ReactDOM.render(
  <AuthProvider>
    <TagsProvider>
      <IngredientsProvider>
        <App />
      </IngredientsProvider>
    </TagsProvider>
  </AuthProvider>,
  document.getElementById("root")
);

// reportWebVitals(console.log)

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Providers from "./context/Providers";
ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById("root")
);

// reportWebVitals(console.log)

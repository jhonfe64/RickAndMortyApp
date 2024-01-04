import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PagesProvider } from "./context/PagesContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import { FiltersProvider } from "./context/FiltersContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <PagesProvider>
          <SearchProvider>
            <FiltersProvider>
              <App />
            </FiltersProvider>
          </SearchProvider>
        </PagesProvider>
      </BrowserRouter>
    </React.StrictMode>
  </>
);

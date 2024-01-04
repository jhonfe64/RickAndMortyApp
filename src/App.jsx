import "./App.css";
import Header from "./components/header/header";
import SearchBar from "./components/searchBar/SearchBar";
import Filtered from "./components/filtered/Filtered";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Details from "./components/detail/Details";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar /> <Filtered />
            </>
          }
        ></Route>
        <Route element={<Details />} path="character/:id"></Route>
      </Routes>
    </>
  );
}

export default App;

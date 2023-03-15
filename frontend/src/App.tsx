import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./Components/SearhBar";
import Content from "./Components/Content";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Content />
    </div>
  );
}

export default App;

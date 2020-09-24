import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ContextFunc from "./context/ContextProvider";

function App() {
  return (
    <div className="App">
      <ContextFunc>
        <Navbar />
        <Home />
      </ContextFunc>
    </div>
  );
}

export default App;

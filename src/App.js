import React from "react";
import { NewsContextProvider } from "./NewsContext";
import News from "./Components/News";
import "./app.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <NewsContextProvider>
        <News />
      </NewsContextProvider>
    </div>
  );
}

export default App;

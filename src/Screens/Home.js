import React from "react";
import { NewsContextProvider } from "../NewsContext";
import NewsContainer from "../Components/NewsContainer";
import Header from "../Components/Header";

function Home() {
  return (
    <div>
      <Header />
      <NewsContextProvider>
        <NewsContainer />
      </NewsContextProvider>
    </div>
  );
}

export default Home;

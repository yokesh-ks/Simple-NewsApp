import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "3e1b106d68bd49fc8609e9d17d93fa59";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=apple&from=2021-10-15&to=2021-10-15&sortBy=popularity&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
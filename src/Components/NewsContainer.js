import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import ArticleCard from "./ArticleCard";
import styled from "styled-components";
import Layout from "./Layout";

function NewsContainer(props) {
  // const { data } = useContext(NewsContext);

  return (
    <Layout>
      <Title>All Articles</Title>
      <GridContainer>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </GridContainer>
    </Layout>
  );
}

export default NewsContainer;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;
  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

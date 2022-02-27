import React from "react";
import styled from "styled-components";
import Button from "./Button";

function ArticleCard({ data }) {
  return (
    <NewsCard>
      <Button title="BBC" />
      <CardTitle>Title</CardTitle>
      <CardDesc>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </CardDesc>
      <AuthorDetail>
        Author <span> - 19-04-1998</span>
      </AuthorDetail>
    </NewsCard>
  );
}

export default ArticleCard;

const NewsCard = styled.div`
  border-radius: 1rem;
  box-shadow: -2px -2px 4px rgb(255 255 255 / 7%), 2px 2px 6px rgb(0 0 0 / 80%);
  padding: 20px;
`;

const CardTitle = styled.h2`
  margin-top: 8px;
  font-size: 24px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-transform: upperCase;
`;

const CardDesc = styled.p`
  margin-top: 8px;
  line-height: 25px;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #fff;
`;

const AuthorDetail = styled.p`
  line-height: 25px;
  margin-top: 8px;
  font-size: 14px;
  color: #6f6f6f;
`;

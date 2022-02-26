import React from "react";

function NewsArticle({ data }) {
  return (
    <div className="news">
      <div className="news-body">
        <span className="news__author">{data.author}</span> <br />
        <h1 className="news__title">{data.title}</h1>
        <p className="news__desc">{data.description}</p>
        <span className="news__published">{data.publishedAt}</span>
        <span className="news__source">{data.source.name}</span>
      </div>
    </div>
  );
}

export default NewsArticle;

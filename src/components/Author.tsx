import React from "react";

export const Author = ({ authorName, authorImg, dateTime }) => {
  return (
    <div className="author-container">
      <img
        className="interactive-comment__img"
        width="30"
        height="30"
        src={authorImg}
      />
      <p className="body">{authorName}</p>
      <p>{dateTime}</p>
    </div>
  );
};

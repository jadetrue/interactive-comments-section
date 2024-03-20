import React from "react";

export const Author = ({ authorName, authorImg, dateTime }) => {
  return (
    <div className="author-container">
      <img width="30" height="30" src={authorImg} />
      <p className="text-medium">{authorName}</p>
      <p className="text-clr-neutral">{dateTime}</p>
      {/* if author name matches user add tag for "YOU" */}
    </div>
  );
};

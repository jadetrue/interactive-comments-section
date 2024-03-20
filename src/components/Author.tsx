import React from "react";

interface AuthorProps {
  authorName?: string;
  authorImg: string;
  dateTime?: string;
}

export const Author: React.FC<AuthorProps> = ({ authorName, authorImg, dateTime }) => {
  return (
    <div className="author-container">
      <img width="50" height="50" src={authorImg} />
      <p className="text-medium">{authorName}</p>
      {/* if author name matches user add tag for "YOU" */}
      <p className="text-clr-neutral">{dateTime}</p>
    </div>
  );
};

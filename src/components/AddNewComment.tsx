import React from "react";
import { Button } from "./Button";
import { Author } from "./Author";

export const AddNewComment = ({ userImg, comment, onClick }) => {
  const placeholder = "Add a comment..."

  return (
    <div className="new-comment-container">
      <Author authorImg={userImg} />
      <textarea className="new-comment" placeholder={placeholder}>{comment}</textarea>
      <div className="reply-btn">
        <Button name="Send" type="default" onClick={onClick} />
      </div>
    </div >
  );
};

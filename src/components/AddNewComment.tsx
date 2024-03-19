import React from "react";
import { Button } from "./Button";

export const AddNewComment = ({ userImg, comment, onClick }) => {
  const placeholder = "Add a comment..."

  return (
    <div className="new-comment-container">
      <img className="author-img" src={userImg} alt="" width="30" height="30" />
      <textarea className="new-comment" placeholder={placeholder}>{comment}</textarea>
      <div className="reply-btn">
        <Button name="Send" type="default" onClick={onClick} />
      </div>
    </div >
  );
};

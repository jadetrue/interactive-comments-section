import React from "react";
import { Author } from "./Author";
import { Button } from "./Button";

interface AddNewCommentProps {
  userImg: string,
  comment: string,
  onClick: () => {}
}

export const AddNewComment: React.FC<AddNewCommentProps> = ({ userImg, comment, onClick }) => {
  const placeholder = "Add a comment..."

  return (
    <div className="new-comment-container">
      <Author authorImg={userImg} />
      <textarea className="new-comment" placeholder={placeholder}>{comment}</textarea>
      <div className="reply-btn">
        <Button name="Send" type="success" onClick={onClick} />
      </div>
    </div >
  );
};

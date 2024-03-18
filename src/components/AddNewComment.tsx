import React from "react";
import { Button } from "./Button";

export const AddNewComment = ({ userImg, comment, onClick }) => {
  const placeholder = "Add a comment..."

  return (
    <div className="new-comment-container">
      <div>
        <textarea placeholder={placeholder}>{comment}</textarea>
      </div>
      <div className="">
        <img src={userImg} alt="" width="30" height="30" />
        <Button name="Send" type="default" onClick={onClick} />
      </div>
    </div >
  );
};

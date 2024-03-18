import React from "react";
import { Button } from "./Button";

export const AddNewComment = ({ userImg, comment, onClick}) => {
  return (
    <div className="comment-container">
      <img src={userImg} alt="" />
      <textarea>{comment}</textarea>
      <Button name="Send" type="default" onClick={onClick} />
    </div>
  );
};

import React from "react";
import { Button } from "./Button";

export const AddNewComment = ({ userImg, comment, onClick }) => {
  return (
    <div className="container">
      <img src={userImg} alt="" width="30" height="30" />
      <textarea>{comment}</textarea>
      <Button name="Send" type="default" onClick={onClick} />
    </div>
  );
};

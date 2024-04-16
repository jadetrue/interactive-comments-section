import React, { useState } from "react";
import { Author } from "./Author";
import { Button } from "./Button";

interface AddNewCommentProps {
  userImg: string,
  comment: string,
  onClick: (text: string) => void
}

export const AddNewComment: React.FC<AddNewCommentProps> = ({ userImg, comment, onClick }) => {
  const [text, setText] = useState<string>("")
  const placeholder = "Add a comment..."

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClick(text);
    setText("")
  }

  return (

    <div className="new-comment-container">
      <Author authorImg={userImg} />
      <form onSubmit={handleSubmit}>
        <textarea className="new-comment" placeholder={placeholder} value={text} onChange={(e) => setText(e.target.value)}>{comment}</textarea>
        <div className="reply-btn">
          <Button name="Send" type="success" onClick={() => { }} />
        </div>
      </form>
    </div >
  );
};

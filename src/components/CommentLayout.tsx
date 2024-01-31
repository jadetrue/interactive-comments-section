import React from "react";
import VoteForComment from "./VoteForComment";
import { Button } from "./Button";

const CommentLayout = () => {
  return (
    <div className="interactive-comment">
      <VoteForComment />
      <div className="">
        <img className="interactive-comment__img" />
        <p>Author Name</p>
        <p>PostedDate/Time</p>
        <Button name="Reply" onClick={() => {}} />
        <Button name="Delete" type="danger" onClick={() => {}} />{" "}
        <div>
          <p>Comment Desc</p>
        </div>
      </div>
    </div>
  );
};

export default CommentLayout;

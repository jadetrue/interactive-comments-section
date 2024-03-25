import React from "react";
import { Button } from "./Button";

interface CommentButtonProps {
  reply: {
    user: { username: string };
  };
  currentUser: string;
}

const CommentButtons: React.FC<CommentButtonProps> = ({
  reply,
  currentUser,
}) => {
  return (
    <div className="button-container">
      {reply.user.username != currentUser && (
        <Button
          name="Reply"
          type="default"
          onClick={() => alert("reply")}
          icon="reply"
        />
      )}
      {reply.user.username === currentUser && (
        <>
          <Button
            name="Delete"
            type="danger"
            onClick={() => alert("delete")}
            icon="delete"
          />
          <Button
            name="Edit"
            type="default"
            onClick={() => alert("edit")}
            icon="edit"
          />
        </>
      )}
    </div>
  );
};

export default CommentButtons;

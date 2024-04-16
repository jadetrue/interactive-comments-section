import React, {useState} from "react";
import { Button } from "./Button";
import { AddNewComment } from "./AddNewComment";

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
const [response, setResponse] = useState<boolean>(false)

  return (
    <div className="button-container">
      {reply.user.username != currentUser && (
        <Button
          name="Reply"
          type="default"
          onClick={() => setResponse(true)}
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

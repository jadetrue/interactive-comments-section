import React from "react";
import { Data } from "../types";
import Comment from "./Comment";

export const CommentsList: React.FC<Data> = ({ comments }) => {

  return (
    <>
      {comments.map((comment, i) => {
        const currentUser = comment.user.username;
        return (
          <div>
            <Comment
              key={i}
              user={comment.user}
              createdAt={comment.createdAt}
              score={comment.score}
              isCurrentUser={currentUser !== comment.user.username}
            >
              {comment.content}
            </Comment>
            <>
              {comment.replies.length > 0 ? (
                <>
                  {comment.replies.map((reply, i) => {
                    return (
                      <div className="ml-6">
                        <Comment
                          user={reply.user}
                          createdAt={reply.createdAt}
                          score={reply.score}
                          isCurrentUser={currentUser === reply.user.username}
                          key={i}
                        >
                          {reply.content}
                        </Comment>
                      </div>
                    );
                  })}
                </>
              ) : (
                <div className="flex p-4 bg-white rounded-lg mt-4">No replies</div>
              )}
            </>
          </div>
        );
      })}
    </>
  );
};

export default CommentsList;

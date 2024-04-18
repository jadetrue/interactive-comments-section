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
                <div className="transform duration-300 ml-8 sm:ml-14 md:ml-24">
                  {comment.replies.map((reply, i) => {
                    return (
                      <Comment
                        user={reply.user}
                        createdAt={reply.createdAt}
                        score={reply.score}
                        isCurrentUser={currentUser === reply.user.username}
                        key={i}
                      >
                        {reply.content}
                      </Comment>
                    );
                  })}
                </div>
              ) : (
                <div className="transform duration-300 flex p-4 bg-light-100 rounded-lg mt-4 ml-14 md:ml-24">No replies</div>
              )}
            </>
          </div>
        );
      })}
    </>
  );
};

export default CommentsList;

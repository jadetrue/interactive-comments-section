import React from "react";
import { Author } from "./Author";
import VoteForComment from "./Score";
import CommentButtons from "./CommentButtons";
import Comment from "./Comment";

interface RepliesProps {
  replies: [
    {
      id: number;
      content: string;
      createdAt: string;
      score: number;
      replyingTo: string;
      user: {
        image: {
          png: string;
          webp: string;
        };
        username: string;
      };
    }
  ];
  currentUser: string;
}

export const Replies: React.FC<RepliesProps> = ({ replies, currentUser }) => {
  return (
    <>
      {replies.map((reply) => {
        return (
          <div className="border">
            <div className="container" key={reply.id}>
              <div>
                <div className="author-button">
                  <Author
                    authorImg={reply.user.image.png}
                    authorName={reply.user.username}
                    dateTime={reply.createdAt}
                    isCurrentUser={reply.user.username === currentUser}
                  />
                  <CommentButtons reply={reply} currentUser={currentUser} />
                </div>
                <Comment comment={reply.content} />
              </div>
              <VoteForComment votes={reply.score} />
            </div>
          </div>
        );
      })}
    </>
  );
};

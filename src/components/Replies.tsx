import React from "react";
import { Author } from "./Author";
import VoteForComment from "./VoteForComment";

interface RepliesProps {
  replies: [{
    id: number;
    content: string;
    createdAt: string;
    score: number;
    replyingTo: string;
    user: {
      image: {
        png: string;
        webp: string;
      },
      username: string;
    },
  }
  ]
}

export const Replies: React.FC<RepliesProps> = ({ replies }) => {

  return (
    <>
      {replies.map((reply) => {

        return (
          <div className="border">
            <div className="container" key={reply.id}>
              <div className="comment">
                <Author
                  authorImg={reply.user.image.png}
                  authorName={reply.user.username}
                  dateTime={reply.createdAt}
                />
                <p className="">{reply.content}</p>
              </div>
              <VoteForComment votes={reply.score} />
            </div>
          </div>
        )
      })}
    </>
  );
};

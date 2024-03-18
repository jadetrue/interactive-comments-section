import React from "react";

interface RepliesProps {
  replies: []
}

export const Replies: React.FC<RepliesProps> = ({ replies }) => {
  return (
    <>
      {replies.map((reply) => {
        <div className="comment-container">{reply}</div>;
      })}
    </>
  );
};

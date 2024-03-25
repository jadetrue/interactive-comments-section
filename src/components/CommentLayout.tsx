import React from "react";
import VoteForComment from "./VoteForComment";
import { Author } from "./Author";
import Comment from "./Comment";
import { AddNewComment } from "./AddNewComment";
import { Replies } from "./Replies";
import CommentButtons from "./CommentButtons";

interface CommentLayoutProps {
  data: {
    comments: [
      {
        user: {
          image: { png: string };
          username: string;
        };
        createdAt: string;
        content: string;
        score: number;
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
      }
    ];
    currentUser: {
      image: { png: string; webp: string };
      username: string;
    };
  };
}

const CommentLayout: React.FC<CommentLayoutProps> = ({ data }) => {
  const currentUser = data.currentUser.username;

  if (data.comments.length < 0) {
    return <p>no comments</p>;
  }

  return (
    <>
      {data.comments.map((item) => {
        return (
          <>
            <div className="container">
              <div>
                <div className="author-button">
                  <Author
                    authorImg={item.user.image.png}
                    authorName={item.user.username}
                    dateTime={item.createdAt}
                    isCurrentUser={item.user.username === currentUser}
                  />
                  <CommentButtons reply={item} currentUser={currentUser} />
                </div>
                <Comment comment={item.content} />
              </div>
              <VoteForComment votes={item.score} />
            </div>
            {/* add condition to render this to relevant comment reply using reply to and name */}
            <div className="reply-container">
              <Replies
                replies={item.replies}
                currentUser={currentUser}
              />
            </div>
          </>
        );
      })}
      <AddNewComment
        userImg={data.currentUser.image.png}
        comment={""}
        onClick={() => alert("hello")}
      />
    </>
  );
};

export default CommentLayout;

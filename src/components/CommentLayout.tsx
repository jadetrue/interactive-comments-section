import React from "react";
import VoteForComment from "./VoteForComment";
import { Author } from "./Author";
import Comment from "./Comment";
import { AddNewComment } from "./AddNewComment";

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
        replies: [{}];
      }
    ];
    currentUser: {
      image: { png: string };
    };
  };
}

const CommentLayout: React.FC<CommentLayoutProps> = ({ data }) => {

  if (data.comments.length < 0) {
    return <p>no comments</p>;
  }

  return (
    <>
      {data.comments.map((item) => {
        return (
          <>
            <div className="comment-container">
              <VoteForComment />
              <div>
                <Author
                  authorImg={item.user.image.png}
                  authorName={item.user.username}
                  dateTime={item.createdAt}
                />
                <Comment comment={item.content} />
              </div>
            </div>
          </>
        );
      })}
      <AddNewComment userImg={data.currentUser.image.png} comment={""} onClick={() => alert("hello")} />
    </>
  );
};

export default CommentLayout;

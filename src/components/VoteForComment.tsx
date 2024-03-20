import React, { useState } from "react";
import { Button } from "./Button";


interface VoteForCommentProps {
  votes: number;
}

const VoteForComment: React.FC<VoteForCommentProps> = ({ votes }) => {
  const [count, setCount] = useState(votes);

  const increase = () => {
    setCount((count) => count + 1);
  };

  const decrease = () => {
    if (count > 0) setCount((count) => count - 1);
  };

  return (
    <div className="vote-for-comment">
      <Button name="+" type="neutral" onClick={async () => increase()} />
      <p className="clr__primary text-medium">{count}</p>
      <Button name="-" type="neutral" onClick={async () => decrease()} />
    </div>
  );
};

export default VoteForComment;

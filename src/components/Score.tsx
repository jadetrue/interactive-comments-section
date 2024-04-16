import React, { useState } from "react";
import { Button } from "./Button";

interface Score {
  score: number;
}

const Score: React.FC<Score> = ({score}) => {
  const [count, setCount] = useState(score);

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

export default Score;

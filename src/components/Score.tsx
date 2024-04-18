import React, { useState } from "react";
import { Button } from "./Button";

interface Score {
  score: number;
}

const Score: React.FC<Score> = ({ score }) => {
  const [count, setCount] = useState(score);

  const increase = () => {
    setCount((count) => count + 1);
  };

  const decrease = () => {
    if (count > 0) setCount((count) => Math.max(score, count - 1));
  };

  return (
    <div className="flex md:flex-col items-center w-fit h-fit md:self-center rounded-lg bg-light-200 font-medium">
      <Button name="+" onClick={async () => increase()} />
      <p className="text-primary-400 font-medium">{count}</p>
      <Button name="-" onClick={async () => decrease()} />
    </div>
  );
};

export default Score;

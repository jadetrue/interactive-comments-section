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
    <div className="flex md:flex-col justify-center w-fit rounded-sm bg-light-800">
      <Button name="+" type="neutral" onClick={async () => increase()} />
      <p className="text-primary-400 text-medium">{count}</p>
      <Button name="-" type="neutral" onClick={async () => decrease()} />
    </div>
  );
};

export default Score;

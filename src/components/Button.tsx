import React from "react";

interface ButtonProps {
  name: string;
  onClick: () => {};
  type?: "danger" | "success" | "neutral" | "default";
}

export const Button: React.FC<ButtonProps> = ({
  name,
  onClick,
  type = "default",
}) => {
  const buttonState = (type) => {
    switch (type) {
      case "danger": {
        return "button--state-danger";
      }
      case "success": {
        return "button--state-success";
      }
      case "neutral": {
        return "button--state-neutral";
      }
      default: {
        return "button--state-default";
      }
    }
  };

  return (
    <button className={`btn ${buttonState(type)} btn__reset`} onClick={onClick}>
      {name}
    </button>
  );
};

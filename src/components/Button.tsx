import React from "react";

interface ButtonProps {
  name: string;
  onClick: () => {};
  type?: "danger" | "success" | "neutral" | "default";
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  name,
  onClick,
  type = "default",
  icon
}) => {
  const buttonState = (type) => {
    switch (type) {
      case "danger": {
        return "btn--state-danger";
      }
      case "success": {
        return "btn--state-success";
      }
      case "neutral": {
        return "btn--state-neutral";
      }
      default: {
        return "btn--state-default";
      }
    }
  };

  return (
    <>
      {icon && <></>}
      <button className={`btn ${buttonState(type)} btn__reset`} onClick={onClick}>
        {name}
      </button>
    </>
  );
};

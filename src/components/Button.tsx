import React from "react";
import DeleteIcon from "../assets/images/icon-delete.svg?react"
import EditIcon from "../assets/images/icon-edit.svg?react"
import ReplyIcon from "../assets/images/icon-reply.svg?react"
interface ButtonProps {
  name: string;
  onClick: () => {};
  type?: "danger" | "success" | "neutral" | "default";
  icon?: "edit" | "reply" | "delete";
}

export const Button: React.FC<ButtonProps> = ({
  name,
  onClick,
  type = "default",
  icon
}) => {
  const buttonState = (type: string) => {
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

  const iconType = (type: string) => {
    switch (type) {
      case "edit": {
        return <EditIcon />
      }
      case "reply": {
        return <ReplyIcon />
      }
      case "delete": {
        return <DeleteIcon />
      }
      default: {
        return
      }
    }
  }

  return (
    <button className={`btn ${buttonState(type)} btn__reset`} onClick={onClick}>
      {icon && iconType(icon)}
      {name}
    </button>
  );
};

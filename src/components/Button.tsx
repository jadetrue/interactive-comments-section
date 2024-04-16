import React from "react";
import DeleteIcon from "../assets/images/icon-delete.svg?react"
import EditIcon from "../assets/images/icon-edit.svg?react"
import ReplyIcon from "../assets/images/icon-reply.svg?react"
interface ButtonProps {
  name: string;
  onClick: () => void;
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
        return "bg-secondary-500";
      }
      case "success": {
        return "bg-primary-400 uppercase";
      }
      case "neutral": {
        return "bg-primary-200 hover:bg-primary-400";
      }
      default: {
        return "bg-primary-400";
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
    <button className={`py-2 px-4 flex gap-2 items-center font-medium text-center rounded-lg ${buttonState(type)} bg-transparent border-none cursor-pointer hover:opacity-0.25`} onClick={onClick}>
      {icon && iconType(icon)}
      {name}
    </button>
  );
};

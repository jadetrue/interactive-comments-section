import React, { ButtonHTMLAttributes, Children } from "react";
import { ReactComponent as Edit } from "../assets/images/icon-edit.svg"
import { ReactComponent as Reply } from "../assets/images/icon-reply.svg"
import { ReactComponent as Delete } from "../assets/images/icon-delete.svg"

interface ButtonProps {
  name: string;
  onClick: () => void;
  type?: "danger" | "success" | "neutral" | "default" | "exit" | "confirm";
  icon?: "edit" | "reply" | "delete";
  disabled?: boolean
  styles?: string
}

export const Button: React.FC<ButtonProps> = ({
  name,
  onClick,
  type = "default",
  icon,
  disabled,
  styles
}) => {
  const buttonState = (type: string) => {
    switch (type) {
      case "danger": {
        return "text-secondary-500";
      }
      case "success": {
        return "bg-primary-400 text-light-100 uppercase";
      }
      case "neutral": {
        return "text-primary-400";
      }
      case "exit": {
        return "bg-light-400 text-light-100 w-full uppercase"
      }
      case "confirm": {
        return "bg-secondary-500 text-light-100 w-full uppercase"
      }
      default: {
        return "text-primary-400";
      }
    }
  };

  const iconType = (type: string) => {
    switch (type) {
      case "edit": {
        return <Edit />
      }
      case "reply": {
        return <Reply />
      }
      case "delete": {
        return <Delete />
      }
      default: {
        return
      }
    }
  }

  return (
    <div className={`${type === "default" ? "opacity-40 hover:opacity-100" : "hover:opacity-40"} ${styles} flex flex-row items-center h-fit rounded-lg z-auto`}>
      {icon && iconType(icon)}
      <button className={`${buttonState(type)} py-2 px-4 h-fit flex gap-2 font-medium text-center justify-center rounded-lg border-none cursor-pointer`} disabled={disabled} onClick={onClick}>
        {name}
      </button>
    </div>
  );
};

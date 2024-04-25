import React, { SyntheticEvent } from "react";
import { Button } from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        isOpen ? "visible bg-black/20" : "invisible"
      }`}
      onClick={onClose}
    >
      <div
        className="bg-light-100 mt-3 rounded-lg py-7 px-8 text-left min-w-sm flex flex-col"
        onClick={(e: SyntheticEvent) => e.stopPropagation()}
      >
        <h3 className="text-light-800 font-semibold mb-2 text-xl">
          Delete comment
        </h3>
        <p className="text-light-400 mb-4">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="grid grid-flow-col gap-4">
          <Button name="No, cancel" type="exit" onClick={() => onClose()} />
          <Button
            name="Yes, delete"
            type="confirm"
            onClick={() => console.log("confirm")}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React from "react";
import { Button } from "./Button";

interface ModalProps {
    title: string;
    content: string;
    confirm: string;
    cancel: string;
}

const Modal: React.FC<ModalProps> = ({ title, content, confirm, cancel }) => {
    return (
        <div className="bg-light-100 mt-3 rounded-lg py-7 px-8 text-left max-w-sm w-full flex flex-col" >
            <h3 className="text-light-800 font-semibold mb-2 text-xl">{title}</h3>
            <p className="text-light-400 mb-4">{content}</p>
            <div className="grid grid-flow-col gap-4">
                <Button
                    name={cancel}
                    type="primary"
                    onClick={() => console.log("exit")}
                />
                <Button
                    name={confirm}
                    type="cancel"
                    onClick={() => console.log("delete")}
                />
            </div>
        </div>
    );
};

export default Modal;

import React, { useState } from "react";
import { Button } from "./Button";
import Modal from "./Modal";

interface ActionButtonProps {
    isCurrentUser: boolean;
}

const ActionButtons: React.FC<ActionButtonProps> = ({ isCurrentUser }) => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <>
            {isCurrentUser && (
                <Button
                    name="Delete"
                    type="danger"
                    onClick={() => setOpenModal(true)}
                    icon="delete"
                />
            )}
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)} />
            {!isCurrentUser && (
                <Button
                    name="Reply"
                    type="neutral"
                    onClick={() => console.log("reply")}
                    icon="reply"
                />
            )}
            {isCurrentUser && (
                <Button
                    name="Edit"
                    type="neutral"
                    onClick={() => console.log("edit")}
                    icon="edit"
                />
            )}
        </>
    );
};

export default ActionButtons;

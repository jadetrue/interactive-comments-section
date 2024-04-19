import React from "react";
import { Button } from "./Button";

interface ActionButtonProps {
    isCurrentUser: boolean;
}

const ActionButtons: React.FC<ActionButtonProps> = ({ isCurrentUser }) => {
    return (
        <>
            {isCurrentUser && (
                <Button
                    name="Delete"
                    type="danger"
                    onClick={() => console.log("delete")}
                    icon="delete"
                />
            )}
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

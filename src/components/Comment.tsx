import React from "react";
import { User } from "../types";
import Score from "./Score";

interface CommentProps {
    children: React.ReactNode;
    user: User;
    createdAt: string;
    score: number;
    isCurrentUser: boolean;
}

const Comment: React.FC<CommentProps> = ({
    user,
    createdAt,
    score,
    isCurrentUser,
    children,
}) => {
    return (
        <div className="flex flex-col text-left mt-4 gap-4 bg-white rounded-lg p-4">
            <div className="flex flex-row gap-4 items-center">
                <img width="50" height="50" src={user.image.png} />
                <p className="text-medium">{user.username}</p>
                {isCurrentUser && <div className="px-2 py-1 bg-red-200 rounded">you</div>}
                <p>{createdAt}</p>
            </div>
            {children}
            <Score score={score} />
        </div >
    );
};

export default Comment;

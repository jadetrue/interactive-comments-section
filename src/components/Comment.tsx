import React from "react";
import { User } from "../types";
import Score from "./Score";
import { Button } from "./Button";

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
        <div className="text-left mt-4 gap-4 bg-white rounded-lg p-4">
            <div className="flex flex-col-reverse md:flex-row gap-4">
                <Score score={score} />
                <div className="flex flex-col">
                    <div className="flex flex-row gap-4 items-center">
                        <img width="50" height="50" src={user.image.png} />
                        <p className="text-medium">{user.username}</p>
                        {isCurrentUser && <div className="px-1.5 py-0.5 bg-primary-400 text-xs text-white rounded-sm">you</div>}
                        <p>{createdAt}</p>
                    </div>
                    <p>{children}</p>
                </div>
            </div>
        </div >
    );
};

export default Comment;

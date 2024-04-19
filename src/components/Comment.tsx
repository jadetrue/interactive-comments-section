import React from "react";
import { User } from "../types";
import Score from "./Score";
import { Button } from "./Button";
import ActionButtons from "./ActionButtons";

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
        <div className="text-left mt-4 gap-4 bg-white rounded-lg p-6 min-w-fit">
            <div className="flex flex-col-reverse md:flex-row gap-6">
                <div className="flex flex-row justify-between">
                    <Score score={score} />
                    <div className="md:hidden gap-2 self-center flex">
                        <ActionButtons isCurrentUser={isCurrentUser} />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="lg:flex lg:flex-row lg:justify-between">
                        <div className="flex flex-row flex-wrap gap-4 items-center">
                            <img width="40" height="40" src={user.image.png} />
                            <p className="font-medium text-light-800">{user.username}</p>
                            {isCurrentUser && <div className="px-1.5 py-0.5 bg-primary-400 text-xs text-light-100 rounded-sm">you</div>}
                            <p className="text-light-400 min-w-fit">{createdAt}</p>
                        </div>
                        <div className="hidden ml-3 md:flex md:flex-wrap md:justify-end lg:flex-row gap-2 self-center ">
                            <ActionButtons isCurrentUser={isCurrentUser} />
                        </div>
                    </div>
                    <p className="text-light-400">{children}</p>
                </div>
            </div>
        </div >
    );
};

export default Comment;

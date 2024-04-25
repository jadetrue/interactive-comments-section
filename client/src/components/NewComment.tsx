import React,{SyntheticEvent, useState} from "react";
import { Data } from "../types";
import { Button } from "./Button";

const NewComment: React.FC<Data> = ({ currentUser }) => {
    const [newComment, setNewComment] = useState()
    return (
        <div className="text-left mt-4 gap-4 bg-white rounded-lg p-4 w-full">
            <div className="grid grid-cols-2 md:flex md:flex-row gap-4 items-start">
                <img
                    width="40"
                    height="40"
                    src={currentUser.image.png}
                    className="row-start-2"
                />
                <textarea
                    placeholder="Add a comment..."
                    className="w-full col-span-2 h-28 rounded-lg p-3 text-light-800 border border-light-300 hover:cursor-pointer"
                    value={newComment}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewComment(e.target.value)}
                />
                <Button
                    type="success"
                    name="send"
                    onClick={() => console.log("send")}
                    styles="row-start-2 justify-end"
                />
            </div>
        </div>
    );
};

export default NewComment;

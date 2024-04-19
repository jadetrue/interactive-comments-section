import React from 'react'
import { Data } from '../types'
import { Button } from './Button'

const NewComment: React.FC<Data> = ({ currentUser }) => {
    return (
        <div className="text-left mt-4 gap-4 bg-white rounded-lg p-4 w-full">
            <div className="flex flex-col md:flex-row gap-4 items-start">
                <img width="50" height="50" src={currentUser.image.png} />
                <textarea placeholder="Add a comment..." className="w-full h-40 rounded-sm p-3 text-light-800 border border-light-300 hover:cursor-pointer" />
                <Button type='success' name="send" onClick={() => console.log("send")} />
            </div>
        </div>
    )
}

export default NewComment
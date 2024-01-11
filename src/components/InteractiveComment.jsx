import VoteForComment from "./VoteForComment"

const InteractiveComment = () => {
  return (
    <div>
        <VoteForComment />
        <div>
            <img />
            <p>Author Name</p>
            <p>PostedDate/Time</p>
            <button>Reply</button>
        </div>
        <div>
            <p>Comment Desc</p>
        </div>
    </div>
  )
}

export default InteractiveComment
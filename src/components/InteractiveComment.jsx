import VoteForComment from "./VoteForComment"

const InteractiveComment = () => {
  return (
    <div className="interactive-comment">
        <VoteForComment />
        <div className="interactive-comment__flex-group">
            <img className="interactive-comment__img"/>
            <p>Author Name</p>
            <p>PostedDate/Time</p>
            <button className="interactive-comment__button">Reply</button>
        </div>
        <div>
            <p>Comment Desc</p>
        </div>
    </div>
  )
}

export default InteractiveComment
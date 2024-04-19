import "./index.css";
import CommentList from "./components/CommentsList";
import data from "./assets/data";
import NewComment from "./components/NewComment";
// import Modal from "./components/Modal";

function App() {
  return (
    <div className="m-auto md:w-7/12">
      <CommentList comments={data.comments} currentUser={data.currentUser} />
      <NewComment currentUser={data.currentUser} />

      {/* <Modal
        title="Delete comment"
        content="Are you sure you want to delete this comment? This will remove the comment and can't be undone."
        confirm="Yes, delete"
        cancel="No, cancel"
      /> */}
    </div>
  );
}

export default App;

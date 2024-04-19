import "./index.css";
import CommentList from "./components/CommentsList";
import data from "./assets/data";

function App() {
  
  return (
    <div className="m-auto md:w-3/4">
      <CommentList comments={data.comments} currentUser={data.currentUser} />
    </div>
  );
}

export default App;

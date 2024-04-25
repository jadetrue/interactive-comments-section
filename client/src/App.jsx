import "./index.css";
import CommentList from "./components/CommentsList";
import data from "./assets/data";
import NewComment from "./components/NewComment";
import Container from "./components/Container";

function App() {
  return (
    <Container>
      <CommentList comments={data.comments} currentUser={data.currentUser} />
      <NewComment currentUser={data.currentUser} />
    </Container>
  );
}

export default App;

import "./App.css";
import CommentLayout from "./components/CommentLayout";
import data from "./assets/data";

function App() {
  console.log(data);
  return (
    <>
      <CommentLayout key="" data={data} />
    </>
  );
}

export default App;

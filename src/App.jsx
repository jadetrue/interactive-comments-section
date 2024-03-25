import "./App.css";
import CommentLayout from "./components/CommentLayout";
import data from "./assets/data";

function App() {
  console.log(data);
  return (
    <div className="layout">
      <CommentLayout key="" data={data} />
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
// const cities=['New York',"New Delhi","Pune"]

function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${title} and ${color}`);
    setTitle("");
    setColor("#000000");
  };
  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="color title...."
      ></input>
      <input
        value={color}
        onChange={(e) => setColor(e.target.value)}
        type="color"
      ></input>
      <button>Add</button>
    </form>
  );
}

export default App;

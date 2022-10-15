import "./App.css";
import { useRef } from "react";
// const cities=['New York',"New Delhi","Pune"]

function App() {
  const txtTitle = useRef();
  const hexColor = useRef();
  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title} and ${color}`);
    txtTitle.current.value="";
    hexColor.current.value="";
  };
  return (
    <form onSubmit={submit}>
      <input ref={txtTitle} type="text" placeholder="color title...."></input>
      <input ref={hexColor} type="color"></input>
      <button>Add</button>
    </form>
  );
}

export default App;

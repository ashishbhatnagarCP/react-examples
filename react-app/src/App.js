import "./App.css";
import { useReducer } from "react";
// const cities=['New York',"New Delhi","Pune"]

function App() {
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  return (
    <div className="App">
      <input type="checkbox" value={checked} onChange={setChecked}></input>
      <label>{checked ? "checked" : "Not checked"}</label>
    </div>
  );
}

export default App;

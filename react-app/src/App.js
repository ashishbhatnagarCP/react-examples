import "./App.css";
import { useState } from "react";
// const cities=['New York',"New Delhi","Pune"]

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="App">
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      ></input>
      <label>{checked?"checked":"Not checked"}</label>
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";

// const cities=['New York',"New Delhi","Pune"]

function App() {
  const [emotion, setEmotion] = useState("happy");
  return (
    <div className="App">
      <h1>Current emotion: {emotion}</h1>
      <button
        onClick={() => {
          setEmotion("sad");
        }}
      >
        Sad
      </button>
      <button
        onClick={() => {
          setEmotion("excited");
        }}
      >
        Excited
      </button>
      <button
        onClick={() => {
          setEmotion("anxious");
        }}
      >
        Anxious
      </button>
    </div>
  );
}

export default App;

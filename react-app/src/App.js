import "./App.css";
import { useState, useEffect } from "react";

// const cities=['New York',"New Delhi","Pune"]

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondaryEmotion, setsecondaryEmotion] = useState("tired");

  useEffect(() => {
    console.log(`Its ${emotion} around here`);
  }, [emotion]);

  useEffect(() => {
    console.log(`Its ${secondaryEmotion} around here`);
  }, [secondaryEmotion]);

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
      <h1>Current Secondary Emotion is {secondaryEmotion}</h1>
      <button
        onClick={() => {
          setsecondaryEmotion("grateful");
        }}
      >
        Grateful
      </button>
    </div>
  );
}

export default App;

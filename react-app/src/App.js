import "./App.css";
import { useState, useEffect } from "react";

function GithubUser({ name, location }) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{location}</h1>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/ashishbhatnagarCP`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) {
    return <h1>Loading ....</h1>;
  }
  if (error) {
    return <pre>{JSON.stringify(error)}</pre>;
  }
  if (!data) return null;
  return <GithubUser name={data.name} location={data.location} />;
}

export default App;

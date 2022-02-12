import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Welcome to your App</h1>
      <Link to="/about">About</Link> |<Link to="/contacts">Contacts</Link>
    </div>
  );
}

export default App;

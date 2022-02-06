import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      Welcome to your react-app
      <nav style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}>
        <Link to="/about">About</Link> |
        <Link to="/contacts">Contacts</Link>
      </nav>
      <h3>child route content</h3>
      <Outlet/>
    </div>
  );
}

export default App;

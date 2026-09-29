import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">React Router Auth Sample</h1>
      </header>
          <div>
              <Link to="/">Home</Link> | 
              <Link to="/login">Login</Link> | 
              <Link to="/protected">Protected</Link> | 
              <Link to="/admin">Admin</Link> | 
          </div>
          <Outlet />
      </div>
  );
}

export default App;

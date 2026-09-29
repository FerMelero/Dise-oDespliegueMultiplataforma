import { Link } from "react-router-dom";
import "./App.css";

function Default () {
  return (
    <div className="app">
      <div className="app-header">
          <div className="lapp-header-title">
            <h1>Default component</h1>
          </div>
          <div>
            <Link to="/">Home</Link> | 
            <Link to="/about">About</Link> |
            <Link to="/nowhere">Faulty link</Link> |
            <Link to="/category/movies">Category: movies</Link> |
            <Link to="/category/fail">Category: fail (will redirect)</Link> |
            <Link to="/sample/42/isacc">Sample: 2 params</Link> |
            <Link to="/sample/0/fail">Sample: fail (will redirect)</Link> |
          </div>
      </div>
    </div>
  );
}
export default Default;
import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function About () {
  return (
    <div className="app">
      <div className="app-header">
          <div className="lapp-header-title">
            <h1>About component</h1>
          </div>
          <div>
              This is what the about page
              is all about
              <Link to="/">Back</Link>
          </div>
      </div>
    </div>
  );
}
export default About;
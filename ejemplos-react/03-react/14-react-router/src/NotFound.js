import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function NotFound () {
    return (
      <div className="app">
        <div className="app-header">
            <div className="lapp-header-title">
              <h1>NotFound component</h1>
            </div>
            <div>
                That page was not found when trying
                <Link to="/">Back</Link>
            </div>
        </div>
      </div>
    );
}
export default NotFound;
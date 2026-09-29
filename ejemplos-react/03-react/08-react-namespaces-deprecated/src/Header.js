import React from "react";
import Page from "./Page";

export default Page.Header = React.createClass({
  render() {
    return (
        <header className="App-header">
          <img src={this.props.logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
    );
  }
});

import "./App.css";
import logo from "./logo.svg";

function App () {
  const showMsg = (msg) => {
    alert("This button works: " + msg);
  };

  return (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            <button onClick={() => showMsg("Hello")}>Click here</button>
        </p>
    </div>
  );
}

export default App;

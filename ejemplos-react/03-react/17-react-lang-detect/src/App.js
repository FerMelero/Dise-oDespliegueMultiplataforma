import './App.css';
import detectBrowserLanguage from "detect-browser-language";

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to React</h1>
      <h2>Your lang: {detectBrowserLanguage()}</h2>
    </header>
  </div>
  );
}

export default App;

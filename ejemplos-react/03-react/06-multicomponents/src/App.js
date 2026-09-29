import './App.css';
import logo from "./logo.svg";
import Header from "./Header"
import Paragraph from "./Paragraph"

function App () {
  const showMsg = (msg) => {
    alert("This button works: " + msg);
  };

  return (
    <div className="App">
      <Header logo={logo} />
      <Paragraph shMsg={showMsg} />
    </div>
  );
}

export default App;

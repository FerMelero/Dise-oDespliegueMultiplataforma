import './App.css';
import Paragraphs from './Paragraphs';
import AnotherParagraph from './AnotherParagraph';

const phrases = ["Code must read like well-written prose",
	"If you need to use comments you should consider refactoring",
	"Test early, and test often"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Fragments Sample
        <Paragraphs phrases={phrases}/>
      </header>
      <AnotherParagraph />
    </div>
  );
}

export default App;

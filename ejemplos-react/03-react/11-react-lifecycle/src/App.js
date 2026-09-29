import { useEffect, useState } from 'react';
import Footer from './Footer';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  console.log("App> is called.");

  useEffect(() => {
    console.log("App> useEffect> ", counter)
  })
  // }) : no re-render
  // }, []): no re-render, just run once.
  // }, [counter]): whill cause re-render
  // }, {})


  const handleClick = (value) => {
    setCounter(counter + value)
  }

  return (
    <div className="App">
      <h1>React lifecycle</h1>
      <button onClick={() => handleClick(1)}>Increment!</button>
      <button onClick={() => handleClick(-1)}>Decrement!</button>
      <div>{counter}</div>
      {counter < 0 && <Footer counter={counter} />}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {string, number, array, func } from 'prop-types';

function App({
  title= "Default title",
  text= "Default text",
  version= 0,
  technologies= [],
  fun= () => { console.log('ok'); }
}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{title} v{version}</h1>
      </header>
      <p className="App-intro">
        {text}
      </p>
      <button onClick={fun}>Click me</button>
    </div>
  );
}

App.propTypes = {
  title: string.isRequired,
  text: string.isRequired,
  version: number.isRequired,
  technologies: array.isRequired,
  fun: func.isRequired
}

export default App;

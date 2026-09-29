import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({ 
    possessions: [],
    studies: []
  });

  const handleChangeSelect = (event) => {
    const list = event.target.selectedOptions || [];
    let possessions = [];
    possessions = Object.keys(list).map( index => list[index].value);

    setState({...state, possessions});
  }

  const handleChangeCheckbox = (event) => {
    const target = event.target;
    let studies = new Set(state.studies);

    if (target.checked)
      studies.add(target.value);
    else
      studies.delete(target.value)

    setState({...state, studies: Array.from(studies)});
  }

  const inArray = (element) => {    
    return state.studies?.includes(element);
  }

  const handleSubmit = () => {
    console.log("Submit: ", state)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Multiple value fileds</h1>
      </header>
      <div className="App-form">
        <form onSubmit={handleSubmit}>
        <div><label>Possessions</label></div>
        <div>
          <select multiple onChange={handleChangeSelect}>
            <option value="101">Smart Phone</option>
            <option value="102">Tablet</option>
            <option value="103">PC</option>
            <option value="104">Laptop</option>
          </select> 
        </div>
        <div><label>Studies</label></div>
        <div>
          <div><input type="checkbox" id="s_primary"
                  value="s_primary" 
                  name="studies"
                  checked={inArray("s_primary")}
                  onChange={handleChangeCheckbox} />
          <label htmlFor="s_primary">Primary</label></div>
          <div><input type="checkbox" id="s_bachelor"
                  value="s_bachelor"
                  name="studies"
                  checked={inArray("s_bachelor")}
                  onChange={handleChangeCheckbox}/>
          <label htmlFor="s_bachelor">Bachelor</label></div>
          <div><input type="checkbox" id="s_master"
                  value="s_master"
                  name="studies"
                  checked={inArray("s_master")}
                  onChange={handleChangeCheckbox}/>
          <label htmlFor="s_master">Master</label></div>
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
        </form>
        <div>Pos: {Object.keys(state.possessions).map( (key) =>
          <span key={key}>{state.possessions[key]},</span>)}
        </div>
        <div>Studies: {Object.keys(state.studies).map( (key) =>
          <span key={key}>{state.studies[key]},</span>)}
        </div>
      </div>
    </div>
  );
}

export default App;

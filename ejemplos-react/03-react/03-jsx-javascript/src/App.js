import './App.css';
import Comments from './Comments';

import Loops from './Loops';
import Variables from './Variables';

function App() {
  const friends = [
    { name: "John Doe", age: 34}, 
    { name: "Gandalf", age: 1432},
    { name: "Aragorn", age: 442}
  ];

  const friendElements = friends.map(function (e) {
      return (
        <li key={e.name} ><b>{e.name}</b>: {e.age} years</li>
      )
  });

  let showTitle = false;
  let applyCss = true;

  return (
    <div >
      <Variables />
      <h1>My Friends {/* Comments inside elements with braces! */}</h1>
      <ul 
        /* This
          is
          a multiline
        */
      >
        {friendElements}
      </ul>
      
      {showTitle?
       (
          <h2>We show title</h2>
       ):(
          <p>No title</p>
       )
      }

       {console.log("This will appear on the console")}
      <p className={ (applyCss) ? "App-intro":""} >
        This is a paragraph
      </p>

      <p onClick={() => alert("It works")}>
        Click on this paragraph
      </p>
      <Comments />

      <Loops />
    </div>
  );
}

export default App;

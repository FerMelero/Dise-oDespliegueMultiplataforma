import './App.css';

function App () {
  const arrowHandleClick = (e) => {
    e.preventDefault();
    alert("The first link was clicked.");
  }

  function handleClick(e) {
    e.preventDefault();
    alert("The second link was clicked.");
  }

  return (
    <div >
      <button onClick={() => alert("It works")}>
          Click on this button
      </button><br />

      <a href="#" onClick={arrowHandleClick}>
        Click first link
      </a><br />

      <a href="#" onClick={(e) => handleClick(e)}>
        Click second link
      </a><br />
    </div>
  );
}

export default App;

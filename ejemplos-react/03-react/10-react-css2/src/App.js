import './App.css';

function App() {
  const h1Css = {
    textAlign: "center",
    color: "red",
    fontWeight: "bold"
  };

  const h2Css = { color: "darkred" };

  const regularCss = {
    textAlign: "justify",
    color: "#222"
  }
  
  const headerCss =  { backgroundColor: "#333" };

  return (
    <div>
      <header style={headerCss}>
        <h1 style={h1Css}>Styled component</h1>
      </header>
      <main>
        <h2 style={h2Css}>Main content</h2>
        <p style={regularCss}>This component is very nice</p>
        </main>
    </div>
  );
}

export default App;

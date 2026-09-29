import logo from './logo.svg';
import './App.css';
import Page from "./Page"

function App() {
  return (
    <Page>
      <Page.Header logo={logo} />
      <Page.Paragraph />
    </Page>
  );
}

export default App;

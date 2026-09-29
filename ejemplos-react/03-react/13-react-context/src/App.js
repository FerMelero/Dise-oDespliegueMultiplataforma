import './App.css';
import Header from './Header';
import Footer from './Footer';
import { OurContext, defaultValues } from './OurContext';

function App() {
  return (
    <div className="App">
      <OurContext.Provider value={defaultValues}>
        <Header/>
        <div>This is just content</div>
        <Footer/>
      </OurContext.Provider>
    </div>
  );
}

export default App;

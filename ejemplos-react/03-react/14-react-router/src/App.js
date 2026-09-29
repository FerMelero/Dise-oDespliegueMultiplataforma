import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import Default from './Default';
import About from './About';
import NotFound from './NotFound';
import Category from './Category';
import Sample from './Sample';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Navigation />} >
          <Route exact path="/" element={<Default />}/>  
          <Route exact path="/about" element={<About />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/sample/:id/:name" element={<Sample />} />
          <Route path='*' element={<NotFound/>} />
        </Route>
    </Routes>
  );
}

export default App;

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Parks from './components/Parks';
import Interface from './components/Interface';

const App = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Interface />}>
                <Route index element={<Home />} />
                <Route path='/parks' element={<Parks />} />
                <Route path='/about' element={<About />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default App

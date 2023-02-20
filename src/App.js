import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js";
import Images from './vistas/Images';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './vistas/Home';
import Image from './vistas/Image';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/images/*' element={<Images />}></Route>
          <Route path='/images/:idImage' element={<Image />} />
          {/* <Route path='/*' element={<div>hola</div>}></Route> */}
        </Routes>

      </div>
    </Router>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/General/Navbar';
import { NavbarShadow } from './Components/General/NavbarShadow';
import { NoMatch } from './Components/NoMatch';

import { Home } from './Components/Home';
import { About } from './Components/About';
import { Contacto } from './Components/Contacto';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={ <Home />}></Route>
      <Route path="*" element={ <NoMatch />}></Route>
      <Route path='/Conoceme' element={ <About />}></Route>
      <Route path='/Contacto' element={ <Contacto />}></Route>
    </Routes> 
    </>
  );
}

export default App;

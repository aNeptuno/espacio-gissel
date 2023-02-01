import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/General/Navbar';
import WppBtn from './Components/General/WppBtn';
import { NoMatch } from './Components/NoMatch';

import { Home } from './Components/Home';
import { About } from './Components/About';
import { Contacto } from './Components/Contacto';
import Footer from './Components/General/Footer';


function App() {
  return (
    <>
    {/* <Navbar /> */}
    <WppBtn />
    <Routes>
      <Route path='/' element={ <Home />}></Route>
      <Route path="*" element={ <NoMatch />}></Route>
      <Route path='/Conoceme' element={ <About />}></Route>
      <Route path='/Contacto' element={ <Contacto />}></Route>
    </Routes> 
    <Footer />
    </>
  );
}

export default App;

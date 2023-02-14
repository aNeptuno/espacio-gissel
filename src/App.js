import { Routes, Route } from 'react-router-dom';

import WppBtn from './Components/General/WppBtn';
import { NoMatch } from './Components/NoMatch';

import { Home } from './Components/Home';

import { Masajes } from './Components/Masajes';
import { About } from './Components/About';

import { TerapiasAromaterapia } from './Components/TerapiasAromaterapia';
import { TerapiasFlores } from './Components/TerapiasFlores';
import { TerapiasBarras } from './Components/TerapiasBarras';
import { TerapiasFrecuencias } from './Components/TerapiasFrecuencias';
import { TerapiasCartas } from './Components/TerapiasCartas';
import { TerapiasNumerologia } from './Components/TerapiasNumerologia';


function App() {
  return (
    <>
    <WppBtn />
    <Routes>
      <Route path='/' element={ <Home />}></Route>
      <Route path="*" element={ <Home />}></Route>
      <Route path="/Terapias" element={ <TerapiasAromaterapia />}></Route>
      <Route path='/Conoceme' element={ <About />}></Route>
      <Route path='/Masajes' element={ <Masajes />}></Route>
      <Route path='/Terapias/Aromaterapia' element={ <TerapiasAromaterapia />}></Route>
      <Route path='/Terapias/Flores' element={ <TerapiasFlores />}></Route>
      <Route path='/Terapias/Barras' element={ <TerapiasBarras />}></Route>
      <Route path='/Terapias/Frecuencias' element={ <TerapiasFrecuencias />}></Route>
      <Route path='/Terapias/CartasNatales' element={ <TerapiasCartas />}></Route>
      <Route path='/Terapias/Numerologia' element={ <TerapiasNumerologia />}></Route>
    </Routes> 
    </>
  );
}

export default App;

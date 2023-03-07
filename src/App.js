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

import { Helmet } from 'react-helmet';


function App() {
  return (
    <>
    <WppBtn />

    <Helmet>
        <title>Espacio Gissel</title>
        <meta 
          name="description"
          content="Terapias de medicina holística para despiertar el potencial de sanación interior, trabajar mente, cuerpo y espíritu, lograr bienestar y salud."
        />
        <meta 
          name="keywords"
          content="Masajes, Masajes terapéuticos, Reflexología, Piedras calientes, Masajes Descontracturantes, Maderoterapia, Digitopuntura, Masajes Estéticos con presoterapia, Masajes Reafirmantes con electrodos, 
          Terapias Alternativas, Terapia con Frecuencias, Healy Montevideo, Aromaterapia, Flores de Bach, Flores del Mediterráneo, Terapia Floral, Barras de Access, Cartas natales, Cartas numerológicas, Numerología, Tarot Egipcio"
        />
    </Helmet> 
    
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

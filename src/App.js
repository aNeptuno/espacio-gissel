import { Routes, Route } from 'react-router-dom';

import WppBtn from './Components/General/WppBtn';
import { NoMatch } from './Components/NoMatch';

import { Home } from './Components/Home';

import { Masajes } from './Components/Masajes';
import { TerapiasPage } from './Components/TerapiasPage';
import { About } from './Components/About';



function App() {
  return (
    <>
    <WppBtn />
    <Routes>
      <Route path='/' element={ <Home />}></Route>
      <Route path="*" element={ <NoMatch />}></Route>
      <Route path='/Conoceme' element={ <About />}></Route>
      <Route path='/Masajes' element={ <Masajes />}></Route>
      <Route path='/Terapias' element={ <TerapiasPage />}></Route>
    </Routes> 
    </>
  );
}

export default App;

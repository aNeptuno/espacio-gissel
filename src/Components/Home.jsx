

import Header  from './Header';
import { Conoceme } from './Conoceme';
import MasajesComponent from './MasajesComponent';
import { Terapias } from './Terapias';
import Testimonios from './Testimonios';
import Footer from './General/Footer';


export const Home = () => {
    return(
        <div>
            <Header />
            <Conoceme />
            <MasajesComponent />
            <Terapias /> 
            <Testimonios />
            <Footer />
        </div>
       
    ) 
}
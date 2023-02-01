

import Header  from './Header';
import { Conoceme } from './Conoceme';
import Masajes from './Masajes';
import { Terapias } from './Terapias';
import Testimonios from './Testimonios';


export const Home = () => {
    return(
        <div>
            <Header />
            <Conoceme />
            <Masajes />
            <Terapias /> 
            <Testimonios />
        </div>
       
    ) 
}
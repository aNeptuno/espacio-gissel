import { Terapias } from './Terapias';
import { Conoceme } from './Conoceme';
import Header  from './Header';

export const Home = () => {
    return(
        <div>
            <Header />
            <Conoceme />
            <Terapias /> 
        </div>
       
    ) 
}
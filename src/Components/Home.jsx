import { Terapias } from './Terapias';
import { Conoceme } from './Conoceme';

export const Home = () => {
    return(
        <div>
            <div className="container">
                <h1 className="title">Homepage</h1>
                <p className="text">Texto normal bla bla, ejemplo de uso de clases para las fuentes</p>
            </div>
            <Conoceme />
            <Terapias /> 
        </div>
       
    ) 
}
import { Terapias } from './Terapias';

export const Home = () => {
    return(
        <div>
            <div className="container">
                <h1 className="title">Homepage</h1>
                <p className="text">Texto normal bla bla, ejemplo de uso de clases para las fuentes</p>
            </div>
            <Terapias /> 
        </div>
       
    ) 
}
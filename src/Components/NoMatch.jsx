
import Navbar from './General/Navbar';

export const NoMatch = () => {
    return(
        <div className='vh-100 bg-dark'>
            <Navbar />
            <div className="container pt-5">
                <h1 className="title pt-5 pb-5 text-center">Página no encontrada</h1>
            </div>
        </div>
    ) 
}
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import header1 from '../img/header1.png';
import header2 from '../img/header2.jpg';
import header3 from '../img/header3.jpg';

import TsParticles from "./General/tsparticles";
import Navbar from './General/Navbar';

function Header() {
    return (
        <div className="header">
            
        <TsParticles />
        <Navbar /> 
        <div className="container content d-flex flex-row justify-content-between pt-5">
            <div className="z-999">
                <h1 className="title pt-5 pb-5 text-left">Espacio Gissel es un lugar para sanar con nuevas herramientas</h1>

                <p className="text p-bottom-60 text-left">
                    Las terapias de medicina holística despiertan el potencial de sanación interior, 
                    trabajan la mente, el cuerpo y el espíritu para lograr bienestar y salud.
                </p>

                <div className='d-flex flex-row header-btns'>
                    <div className='btn-container'>
                        <Button variant="primary">SABER MÁS</Button>
                    </div>
                    <div className='btn-container'>
                        <Button variant="outline-secondary">CONTACTO</Button>
                    </div>
                </div>
       
            </div>


            <div className="z-999 header-img">
                <img
                    className="d-block"
                    src={header1}
                    alt="Logo"
                    width="500px"
                />
            </div>
        </div>

        
        <div class="wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
            </svg>
        </div>

        </div>
    )
}

export default Header;
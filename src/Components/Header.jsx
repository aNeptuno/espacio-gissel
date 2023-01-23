import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import header1 from '../img/header1.png';
import header2 from '../img/header2.jpg';
import header3 from '../img/header3.jpg';
import wave from '../img/wave.png';

function Header() {
    return (
        <div className="header">
        <div className="container d-flex flex-row justify-content-between pt-5">
            <div className="w-50">
                <h1 className="title pt-4 pb-5">Espacio Gissel es un lugar para sanar con nuevas herramientas</h1>

                <p className="text p-bottom-60">
                    Las terapias de medicina holística despiertan el potencial de sanación interior, 
                    trabajan la mente, el cuerpo y el espíritu para lograr bienestar y salud.
                </p>

                <div className='d-flex flex-row'>
                    <div className='btn-container pe-5'>
                        <Button variant="primary">SABER MÁS</Button>
                    </div>
                <div className='btn-container pe-5'>
                    <Button variant="outline-secondary">CONTACTO</Button>
                </div>
            </div>
       
        </div>


            <div className="w-40">
                <Carousel fade controls={false} interval={20000000}>
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src={header1}
                        alt="First slide"
                        width="500px"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src={header2}
                        alt="Second slide"
                        width="400px"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src={header3}
                        alt="Third slide"
                        width="400px"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

        <img 
            src={wave} 
            alt="transition"
        />
        </div>
    )
}

export default Header;
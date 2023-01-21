import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import header1 from '../img/header1.png';
import header2 from '../img/header2.jpg';
import header3 from '../img/header3.jpg';

function Header() {
    return (
        <div className="container d-flex flex-row justify-content-between pt-5">
            <div className="w-50">
                <h1 className="title pt-4 pb-4">Espacio Gissel es un lugar para sanar con nuevas herramientas</h1>
                <p className="text">
                    Las terapias de medicina holística despiertan el potencial de sanación interior, 
                    trabajan la mente, el cuerpo y el espíritu para lograr bienestar y salud.
                </p>

                <div className='d-flex flex-row'>
                    <Button variant="primary">SABER MÁS</Button>
                    <Button variant="outline-primary">CONTACTO</Button>
                </div>
            </div>


            <div className="w-40">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src={header1}
                    alt="First slide"
                    width="600px"
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
    )
}

export default Header;
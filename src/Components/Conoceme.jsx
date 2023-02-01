import about from '../img/presentacion.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 
import { faYoutube} from '@fortawesome/free-brands-svg-icons'; 
import Button from 'react-bootstrap/Button';

export const Conoceme = () => {
    return(
        <div className="container">
            <div className="d-flex flex-row mb-3 p-50 about-cont p-m-bottom-0">

                <div className="about-img">
                    <img src={about} alt="Espacio Gissel Logo" />
                </div>

                <div className="d-flex flex-column p-50 p-top-0 about-text p-m-bottom-0">
                    <h2 className="subtitle pt-2 pb-2">Bienvenidas y bienvenidos</h2>
                    <h1 className="title pt-2 pb-4">Unas palabras sobre mi</h1>
                    <p className="text">
                        Gissel es pionera en pensar la belleza como un concepto holístico. 
                        De larga trayectoria profesional y de reconocido prestigio en Montevideo. 
                        En 2006 abre su propio centro dedicado exclusivamente a la belleza, la salud y el bienestar. 
                    </p>
                    <div className="hand-container">
                        <FontAwesomeIcon icon={faHandHoldingHeart} color="rgba(158,188,185,.2)"/>
                    </div>
                <div className="aboutBtns-container pt-0">
                    <div className='pt-3 pe-3'>
                        <Button variant="primary" className="aboutBtns">CONOCEME</Button>
                    </div>
                    <div className='d-flex flex-row justify-content-between pt-3 aboutBtns'>
                        <Button variant="outline-primary" className="btn-circle">
                            <FontAwesomeIcon icon={ faInstagram } />
                        </Button>
                        <Button variant="outline-primary" className="btn-circle">
                            <FontAwesomeIcon icon={ faWhatsapp } />
                        </Button>
                        <Button variant="outline-primary" className="btn-circle">
                            <FontAwesomeIcon icon={ faYoutube } />
                        </Button>
                    </div>
                </div>
                    
                </div>
            </div>

            <div className="aboutBtns-container-1200 p-50 pt-0">
                <div>
                    <Button variant="primary" className="aboutBtns">CONOCEME</Button>
                </div>
                <div className='d-flex flex-row justify-content-between pt-3 aboutBtns'>
                    <Button variant="outline-primary" className="btn-circle">
                        <FontAwesomeIcon icon={ faInstagram } />
                    </Button>
                    <Button variant="outline-primary" className="btn-circle">
                        <FontAwesomeIcon icon={ faWhatsapp } />
                    </Button>
                    <Button variant="outline-primary" className="btn-circle">
                        <FontAwesomeIcon icon={ faYoutube } />
                    </Button>
                </div>
            </div>

        </div>
    ) 
}


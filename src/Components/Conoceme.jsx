import './Conoceme.css';

import about from '../img/presentacion.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';
/* import { NavLink } from "react-router-dom"; */
import { HashLink } from 'react-router-hash-link';
import { Fade } from 'react-awesome-reveal';

import { NavLink } from "react-router-dom";

export const Conoceme = () => {
    return (
        <div className="container">
            <div className="d-flex flex-row mb-3 p-50 about-cont p-m-bottom-0">

                
                    <div className="about-img">
                        <img src={about} alt="Espacio Gissel" />
                    </div>
                

                <div className="d-flex flex-column p-50 p-top-0 about-text p-m-bottom-0">
                    <Fade fraction={1} cascade damping={0.2} triggerOnce={true}>
                        <h2 className="subtitle pt-2 pb-2">Bienvenidas y bienvenidos</h2>
                        <h1 className="title pt-2 pb-4">Unas palabras sobre mi</h1>
                        <p className="text">
                            Soy pionera en pensar la belleza como concepto holistico. Tengo larga trayectoria profesional y reconocido prestigio en Montevideo. En 2006 abrí mi propio centro dedicado exclusivamente a la belleza y la sanación como un todo.
                        </p>
                    </Fade>
                    <div className="hand-container">
                        <FontAwesomeIcon icon={faHandHoldingHeart} color="rgba(158,188,185,.2)" />
                    </div>
                    <div className="aboutBtns-container pt-0 text-center">
                        <div className='pt-3 pe-3'>
                            <Button variant="primary" className="aboutBtns" as={HashLink} to="/Conoceme">CONOCEME</Button>
                        </div>
                        <div className='d-flex flex-row justify-content-between pt-3 pe-3 aboutBtns text-center'>
                            <a href="https://www.instagram.com/espaciogissel.uy/" target="_blank" className='about-a'>
                                <Button variant="outline-primary" className="btn-circle">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </Button>
                            </a>

                            <Button variant="outline-primary" className="btn-circle">
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </Button>

                            <a href="https://www.youtube.com/@gisselolivera6756" target="_blank" className='about-a'>
                                <Button variant="outline-primary" className="btn-circle">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </Button>
                            </a>

                        </div>
                    </div>

                </div>
            </div>

            <div className="aboutBtns-container-1200 p-50 pt-0">
                <div>
                    <Button variant="primary" className="aboutBtns" as={HashLink} to="/Conoceme">CONOCEME</Button>
                </div>
                <div className='d-flex flex-row justify-content-between pt-3 aboutBtns'>
                    <Button variant="outline-primary" className="btn-circle">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Button>
                    <Button variant="outline-primary" className="btn-circle">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </Button>
                    <Button variant="outline-primary" className="btn-circle">
                        <FontAwesomeIcon icon={faYoutube} />
                    </Button>
                </div>
            </div>

        </div>
    )
}


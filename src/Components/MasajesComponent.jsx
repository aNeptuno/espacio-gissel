
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faSpa } from '@fortawesome/free-solid-svg-icons';

import { Fade } from "react-awesome-reveal";
import Button from 'react-bootstrap/Button';

import masaje from '../img/digitopuntura.jpg';
/* import { NavLink } from "react-router-dom"; */
import { HashLink } from 'react-router-hash-link';

function Masajescomponent() {
    return (
        <div className="bg-orange">
            <div className="container pt-5 pb-4">
                <div className="d-flex flex-column masajes-mainpage pb-4">
                    <Fade direction='down' fraction={0.2}>
                        <div className='masajes-mainpage-welcome'>

                            <h1 className="title title-orange pt-4 pb-4">Masajes para el bienestar</h1>
                            <h2 className="subtitle subtitle-orange pt-2 pb-2">Conoce la amplia variedad de masajes, uno de ellos es para ti</h2>
                            <div className="spa-container">
                                <FontAwesomeIcon icon={faSpa} color="rgba(236, 75, 25, .2)" />
                            </div>

                        </div>
                    </Fade>
                    <div className='masajes-mainpage-content pt-5 '>
                        <Fade direction='left' cascade damping={0.15}>
                            <ul>
                                <li className="text text-orange">
                                    <Button variant="outline-danger" className="btn-msj">
                                        <FontAwesomeIcon icon={faCheck} color="rgb(236, 75, 25, .6)" />
                                    </Button>
                                    <span>
                                        Reflexología
                                    </span>
                                </li>
                                <li className="text text-orange">
                                    <Button variant="outline-danger" className="btn-msj">
                                        <FontAwesomeIcon icon={faCheck} color="rgb(236, 75, 25, .6)" />
                                    </Button>
                                    <span>
                                        Piedras calientes
                                    </span>
                                </li>
                                <li className="text text-orange">
                                    <Button variant="outline-danger" className="btn-msj">
                                        <FontAwesomeIcon icon={faCheck} color="rgb(236, 75, 25, .6)" />
                                    </Button>
                                    <span>
                                        Descontracturantes
                                    </span>
                                </li>
                                <li className="text text-orange">
                                    <Button variant="outline-danger" className="btn-msj">
                                        <FontAwesomeIcon icon={faCheck} color="rgb(236, 75, 25, .6)" />
                                    </Button>
                                    <span>Maderoterapia</span>
                                </li>
                                <li className="text text-orange">
                                    <Button variant="outline-danger" className="btn-msj">
                                        <FontAwesomeIcon icon={faCheck} color="rgb(236, 75, 25, .6)" />
                                    </Button>
                                    <span>Terapéuticos</span>
                                </li>
                                <li className="text text-orange">
                                    <Button variant="outline-danger" className="btn-msj">
                                        <FontAwesomeIcon icon={faCheck} color="rgb(236, 75, 25, .6)" />
                                    </Button>
                                    <span>Digitopuntura</span>
                                </li>
                                <li className="text text-orange">
                                    <Button variant="outline-danger" className="btn-msj">
                                        <FontAwesomeIcon icon={faCheck} color="rgb(236, 75, 25, .6)" />
                                    </Button>
                                    <span>Estéticos con ultrasonido</span>
                                </li>
                                <li className="text text-orange">
                                    <Button variant="outline-danger" className="btn-msj">
                                        <FontAwesomeIcon icon={faCheck} color="rgb(236, 75, 25, .6)" />
                                    </Button>
                                    <span>Reafirmantes con electrodos</span>
                                </li>
                            </ul>
                        </Fade>
                        <Fade direction="right">
                            <div className='masajes-mainpage-img'>
                                <img src={masaje} alt="Digitopuntura" />
                            </div>
                        </Fade>
                    </div>


                    <div className='masajes-mainpage-button'>
                        <Fade direction='up'>
                            <Button variant="danger" as={HashLink} to="/Masajes"> LEER MÁS </Button>
                        </Fade>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Masajescomponent;
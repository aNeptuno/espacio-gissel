
import './Terapias.css';

import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faEyeDropper } from '@fortawesome/free-solid-svg-icons';
import { faHandsHoldingCircle } from '@fortawesome/free-solid-svg-icons';
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { fa7 } from '@fortawesome/free-solid-svg-icons';
import { Fade } from "react-awesome-reveal";
/* import { NavLink } from "react-router-dom"; */
import { HashLink } from 'react-router-hash-link';

export const Terapias = () => {
    return (
        <div className="container p-4 pt-5 pb-5">
            <Fade direction='left' cascade damping={0.1} triggerOnce={true}>
                <h1 className="title text-center pb-2 pt-5">Terapias y tratamientos</h1>
                <h2 className="text text-center pt-4 pb-4">Herramientas para que ayudarte a sanar conectando con tu poder interior y energía.</h2>
            </Fade>
            <div class="row row-cols-1 row-cols-lg-3 g-5 cards-container">
                <div class="col">
                    <Card className="card-elem d-flex text-center h-100">
                        <Card.Body>
                            <FontAwesomeIcon icon={faWind} className="card-component icon-color" />
                            <Card.Title className="subtitle card-component">Aromaterapia</Card.Title>
                            <Card.Text className="text card-component">
                                Medicina alternativa basada en el uso de distintos aceites esenciales y compuestos aromáticos para ayudar con los problemas del cuerpo y de la mente.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Link as={HashLink} to="/Terapias/Aromaterapia" className='text card-component'>Leer más</Card.Link>
                        </Card.Footer>
                    </Card>
                </div>

                <div class="col">
                    <Card className="card-elem text-center h-100">
                        <Card.Body>
                            <FontAwesomeIcon icon={faEyeDropper} className="card-component icon-color" />
                            <Card.Title className="subtitle card-component">Flores de Bach y Mediterráneo</Card.Title>
                            <Card.Text className="text card-component">
                                Se utilizan esencias florales específicas para ayudar a generar los cambios emocionales y sentimentales que precises en tu vida.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Link as={HashLink} to="/Terapias/Flores" className='text card-component'>Leer más</Card.Link>
                        </Card.Footer>
                    </Card>
                </div>

                <div class="col">
                    <Card className="card-elem text-center h-100">
                        <Card.Body>
                            <FontAwesomeIcon icon={faHandsHoldingCircle} className="card-component icon-color" />
                            <Card.Title className="subtitle card-component">Barras de Access</Card.Title>
                            <Card.Text className="text card-component">
                                Técnica de aplicación manual que trabaja energéticamente con el inconsciente para generar cambios psicológicos y emocionales, eliminando los pensamientos limitantes.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Link as={HashLink} to="/Terapias/Barras" className='text card-component'>Leer más</Card.Link>
                        </Card.Footer>
                    </Card>
                </div>

                <div class="col">
                    <Card className="card-elem text-center h-100">
                        <Card.Body>
                            <FontAwesomeIcon icon={faWaveSquare} className="card-component icon-color" />
                            <Card.Title className="subtitle card-component">Terapia con frecuencias</Card.Title>
                            <Card.Text className="text card-component">
                                Resonador holistico que emplea frecuencias de alta vibración cuántica para ayudarte al equilibrio.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Link as={HashLink} to="/Terapias/Frecuencias" className='text card-component'>Leer más</Card.Link>
                        </Card.Footer>
                    </Card>
                </div>

                <div class="col">
                    <Card className="card-elem text-center h-100">
                        <Card.Body>
                            <FontAwesomeIcon icon={faMoon} className="card-component icon-color" />
                            <Card.Title className="subtitle card-component">Cartas natales</Card.Title>
                            <Card.Text className="text card-component">
                                Es una lectura de tu personalidad, emociones y tu identidad a través de cómo te marcaron los astros, para poder conectar más con lo que realmente eres.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Link className='text card-component' as={HashLink} to="/Terapias/CartasNatales">Leer más</Card.Link>
                        </Card.Footer>
                    </Card>
                </div>

                <div class="col">
                    <Card className="card-elem text-center h-100">
                        <Card.Body>
                            <FontAwesomeIcon icon={fa7} className="card-component icon-color" />
                            <Card.Title className="subtitle card-component">Cartas numerológicas</Card.Title>
                            <Card.Text className="text card-component">
                                Descubrí tu misión de vida y las tendencias que tendrás en tu futuro a través de las vibraciones que crean tus números.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Link className='text card-component' as={HashLink} to="/Terapias/Numerologia">Leer más</Card.Link>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </div>
    )
}
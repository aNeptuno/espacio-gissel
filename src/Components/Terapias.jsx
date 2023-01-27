
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faEyeDropper } from '@fortawesome/free-solid-svg-icons';
import { faHandsHoldingCircle } from '@fortawesome/free-solid-svg-icons';
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { fa7 } from '@fortawesome/free-solid-svg-icons';

export const Terapias = () => {
    return (
        <div className="container">
            <h1 className="title text-center pb-2 pt-2">Terapias y tratamientos</h1>
            <h2 className="text text-center pt-3 pb-3">Texto corto introductorio a los distintos tipos de terapias y tratamientos que ofrece el espacio.</h2>

            <div class="row justify-content-evenly cards-container">
                <Card className="card-elem col-lg-3 col-md-5 col-xs-12 m-4 text-center">
                    <Card.Body>
                        <FontAwesomeIcon icon={faWind} className="card-component icon-color" />
                        <Card.Title className="subtitle card-component">Aromaterapia</Card.Title>
                        <Card.Text className="text card-component">
                            Medicina alternativa basada en el uso de materiales aromáticos.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#" className='text card-component'>Leer más</Card.Link>
                    </Card.Body>
                </Card>

                <Card className="card-elem col-lg-3 col-md-5 col-xs-12 m-4 text-center">
                    <Card.Body>
                        <FontAwesomeIcon icon={faEyeDropper} className="card-component icon-color" />
                        <Card.Title className="subtitle card-component">Flores de Bach y Mediterráneo</Card.Title>
                        <Card.Text className="text card-component">
                            Se utilizan esencias florales para ayudar a generar cambios en las emociones y los sentimientos.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#" className='text card-component'>Leer más</Card.Link>
                    </Card.Body>
                </Card>
                <Card className="card-elem col-lg-3 col-md-5 col-xs-12 m-4 text-center">
                    <Card.Body>
                        <FontAwesomeIcon icon={faHandsHoldingCircle} className="card-component icon-color" />
                        <Card.Title className="subtitle card-component">Barras de Access</Card.Title>
                        <Card.Text className="text card-component">
                            Técnica de aplicación manual energética que trabaja con el inconsciente generando cambios en las emociones y pensamientos limitantes.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#" className='text card-component'>Leer más</Card.Link>
                    </Card.Body>
                </Card>
                <Card className="card-elem col-lg-3 col-md-5 col-xs-12 m-4 text-center">
                    <Card.Body>
                        <FontAwesomeIcon icon={faWaveSquare} className="card-component icon-color" />
                        <Card.Title className="subtitle card-component">Terapia con frecuencias</Card.Title>
                        <Card.Text className="text card-component">
                            Resonador holistico que emplea frecuencias de alta vibración cuántica para ayudarte al equilibrio.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#" className='text card-component'>Leer más</Card.Link>
                    </Card.Body>
                </Card>
                <Card className="card-elem col-lg-3 col-md-5 col-xs-12 m-4 text-center">
                    <Card.Body>
                        <FontAwesomeIcon icon={faMoon} className="card-component icon-color" />
                        <Card.Title className="subtitle card-component">Cartas natales</Card.Title>
                        <Card.Text className="text card-component">
                            TEXTO PLACEHOLDER
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#" className='text card-component'>Leer más</Card.Link>
                    </Card.Body>
                </Card>
                <Card className="card-elem col-lg-3 col-md-5 col-xs-12 m-4 text-center">
                    <Card.Body>
                        <FontAwesomeIcon icon={fa7} className="card-component icon-color" />
                        <Card.Title className="subtitle card-component">Cartas numerológicas</Card.Title>
                        <Card.Text className="text card-component">
                            TEXTO PLACEHOLDER
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#" className='text card-component'>Leer más</Card.Link>
                    </Card.Body>
                </Card>

                <p className="text">
                    AROMATERAPIA <i className="fa-solid fa-wind"></i>
                    FLORES DE BACH <i className="fa-solid fa-eye-dropper"></i>
                    BARRAS DE ACCESS <i className="fa-solid fa-hands-holding-circle"></i>
                    TERAPIA CON FRECUENCIAS <i className="fa-solid fa-wave-square"></i>
                    CARTAS NATALES <i className="fa-solid fa-moon"></i>
                    CARTAS NUMEROLOGICAS <i className="fa-solid fa-7"></i>
                </p>
            </div>
        </div>
    )
}
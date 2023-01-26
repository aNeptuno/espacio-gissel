
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons';

export const Terapias = () => {
    return (
        <div className="container">
            <h1 className="title">Terapias y tratamientos <i className="fa-brands fa-github"></i></h1>
            <h2 className="text">Texto corto introductorio a los distintos tipos de terapias y tratamientos que ofrece el espacio.</h2>

            <div class="row justify-content-evenly cards-container">
                <Card className="col-lg-3 col-md-5 col-xs-12 m-4">
                    <Card.Body>
                        <FontAwesomeIcon icon={faWind} />
                        <Card.Title>Aromaterapia</Card.Title>
                        <Card.Text>
                            Medicina alternativa basada en el uso de materiales aromáticos.
                        </Card.Text>
                        <Button variant="primary">Leer más</Button>
                    </Card.Body>
                </Card>
                <Card className="col-lg-3 col-md-5 col-xs-12 m-4">
                    <Card.Body>
                        <FontAwesomeIcon icon={faWind} />
                        <Card.Title>Flores de Bach y Mediterráneo</Card.Title>
                        <Card.Text>
                            Se utilizan esencias florales para ayudar a generar cambios en las emociones y los sentimientos.
                        </Card.Text>
                        <Button variant="primary">Leer más</Button>
                    </Card.Body>
                </Card>
                <Card className="col-lg-3 col-md-5 col-xs-12 m-4">
                    <Card.Body>
                        <FontAwesomeIcon icon={faWind} />
                        <Card.Title>Flores de Bach y Mediterráneo</Card.Title>
                        <Card.Text>
                            Se utilizan esencias florales para ayudar a generar cambios en las emociones y los sentimientos.
                        </Card.Text>
                        <Button variant="primary">Leer más</Button>
                    </Card.Body>
                </Card>
                <Card className="col-lg-3 col-md-5 col-xs-12 m-4">
                    <Card.Body>
                        <FontAwesomeIcon icon={faWind} />
                        <Card.Title>Flores de Bach y Mediterráneo</Card.Title>
                        <Card.Text>
                            Se utilizan esencias florales para ayudar a generar cambios en las emociones y los sentimientos.
                        </Card.Text>
                        <Button variant="primary">Leer más</Button>
                    </Card.Body>
                </Card><Card className="col-lg-3 col-md-5 col-xs-12 m-4">
                    <Card.Body>
                        <FontAwesomeIcon icon={faWind} />
                        <Card.Title>Flores de Bach y Mediterráneo</Card.Title>
                        <Card.Text>
                            Se utilizan esencias florales para ayudar a generar cambios en las emociones y los sentimientos.
                        </Card.Text>
                        <Button variant="primary">Leer más</Button>
                    </Card.Body>
                </Card><Card className="col-lg-3 col-md-5 col-xs-12 m-4">
                    <Card.Body>
                        <FontAwesomeIcon icon={faWind} />
                        <Card.Title>Flores de Bach y Mediterráneo</Card.Title>
                        <Card.Text>
                            Se utilizan esencias florales para ayudar a generar cambios en las emociones y los sentimientos.
                        </Card.Text>
                        <Button variant="primary">Leer más</Button>
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
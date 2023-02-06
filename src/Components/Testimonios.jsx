
import testimonios from '../img/testimonios.jpg';
import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import header2 from '../img/header2.jpg';
import header3 from '../img/header3.jpg';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


function Testimonios() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="pt-5 position-relative" id="Testimonios">
            <div className="d-flex flex-column testimonios-mainpage container p-4">
                <div className='testimonios-mainpage-welcome'>
                    <h2 className="subtitle pt-4 ">Testimonios</h2>
                    <h1 className="title pt-2 pb-4">Palabras dulces de mis pacientes</h1>
                </div>
            </div>
            <div className='testimonios-mainpage-img'>
                <img src={testimonios} alt="Testimonios" />
                <div className="testimonios-mainpage-bg"></div>
            </div>
            <div className='testimonios-carousel-container position-absolute'>

                <Carousel activeIndex={index} onSelect={handleSelect} className="d-none d-md-block" interval={20000000}>
                    <Carousel.Item>
                        <div class="row row-cols-2 g-5 cards-wrapper justify-content-end">
                            <div class="col">
                                <Card style={{ width: '25rem' }} className="h-100">
                                    <div class="row g-1 d-flex align-items-center">
                                        <div class="col-auto p-3">
                                            <img src={header2}
                                                class="rounded-circle mb-4 mb-lg-0 shadow-2" alt="woman avatar" width="85"
                                                height="85" />
                                        </div>
                                        <div class="col ">
                                            <Card.Title className="subtitle mx-3">Estela, paciente</Card.Title>

                                        </div>
                                    </div>
                                    <Card.Text className='p-4'>
                                        <FontAwesomeIcon icon={faQuoteLeft} className="icon-color fa-lg me-2" />
                                        <span className="text">Elegí este espacio con Gissel porque es una persona que me transmitió y me dio una visión de todo lo que podía llegar a cambiar.
                                            La elegí a ella porque sentí esa confianza y esa conexión, y estoy aquí, y de aquí no me voy!</span>
                                    </Card.Text>
                                </Card>
                            </div>



                            <div class="col">
                                <Card style={{ width: '25rem' }} className="h-100">
                                    <div class="row g-1 d-flex align-items-center">
                                        <div class="col-auto p-3">
                                            <img src={header3}
                                                class="rounded-circle mb-4 mb-lg-0 shadow-2" alt="woman avatar" width="85"
                                                height="85" />
                                        </div>
                                        <div class="col ">
                                            <Card.Title className="subtitle mx-3">María, paciente</Card.Title>

                                        </div>
                                    </div>
                                    <Card.Text className='p-4'>
                                        <FontAwesomeIcon icon={faQuoteLeft} className="icon-color fa-lg me-2" />
                                        <span className="text">Te da más confianza, alegría, y te permite encontrar otros espacios, que no son
                                            los convencionales, para poder desarrollarte y tener una vida más digna y alegre</span>
                                    </Card.Text>
                                </Card>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={header2}
                            alt="Second slide"
                            width="400px"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={header3}
                            alt="Third slide"
                            width="400px"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <Carousel activeIndex={index} onSelect={handleSelect} className="d-md-none">
                    <Carousel.Item>
                        <Card className="card-elem d-flex text-center h-100">
                            <Card.Body>
                                <Card.Title className="subtitle card-component">Aromaterapia</Card.Title>
                                <Card.Text className="text card-component">
                                    Medicina alternativa basada en el uso de materiales aromáticos.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div class="col">
                            <Card style={{ width: '25rem' }} className="h-100">
                                <div class="row g-1 d-flex align-items-center">
                                    <div class="col-auto p-3">
                                        <img src={header2}
                                            class="rounded-circle mb-4 mb-lg-0 shadow-2" alt="woman avatar" width="85"
                                            height="85" />
                                    </div>
                                    <div class="col ">
                                        <Card.Title className="subtitle mx-3">Estela, paciente</Card.Title>

                                    </div>
                                </div>
                                <Card.Text className='p-4'>
                                    <FontAwesomeIcon icon={faQuoteLeft} className="icon-color fa-lg me-2" />
                                    <span className="text">Elegí este espacio con Gissel porque es una persona que me transmitió y me dio una visión de todo lo que podía llegar a cambiar.
                                        La elegí a ella porque sentí esa confianza y esa conexión, y estoy aquí, y de aquí no me voy!</span>
                                </Card.Text>
                            </Card>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Testimonios;
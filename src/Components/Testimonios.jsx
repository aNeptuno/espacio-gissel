
import './Testimonios.css';

import testimonios from '../img/testimonios.jpg';
import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { Fade } from "react-awesome-reveal";

import elvira from '../img/elvira.jpg';
import magali from '../img/magali.jpg';
import lucia from '../img/lucia.jpg';
import estela from '../img/estela.jpg';


function Testimonios() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="pt-5 position-relative" id="Testimonios">
            <div className="d-flex flex-column testimonios-mainpage container p-4 pb-0">
                <div className='testimonios-mainpage-welcome'>

                    <Fade fraction={1} duration={1300} triggerOnce={true}>
                        <h2 className="subtitle pt-4 ">Testimonios</h2>
                        <h1 className="title pt-2 pb-4">Palabras dulces de mis pacientes</h1>
                    </Fade>
                </div>
            </div>
            <section className="parallax3 img-p-1" style={{ backgroundImage: `url(${testimonios})` }} ></section>
            <div className='testimonios-mainpage-img'>
                <div className="testimonios-mainpage-bg"></div>
            </div>
            <div className='testimonios-carousel-container position-absolute'>

                <Carousel activeIndex={index} onSelect={handleSelect} className="d-none d-md-block first-carousel" interval={20000000}>
                    <Carousel.Item>
                        <div class="row row-cols-2 cards-wrapper d-flex justify-content-around">
                            <div class="col d-flex justify-content-center">
                                <Card style={{ width: '24rem' }} className="h-100">
                                    <div class="row g-1 d-flex align-items-center">
                                        <div class="col-auto p-3">
                                            <img src={estela}
                                                class="rounded-circle mb-4 mb-lg-0 shadow-2" alt="woman avatar" width="85"
                                                height="85" />
                                        </div>
                                        <div class="col ">
                                            <Card.Title className="subtitle mx-3">Estela</Card.Title>

                                        </div>
                                    </div>
                                    <Card.Text className='p-4'>
                                        <FontAwesomeIcon icon={faQuoteLeft} className="icon-color fa-lg me-2" />
                                        <span className="text">
                                            Es increíble como me ha cambiado la vida, el estado de ánimo, la forma de relacionarme. Elegí este espacio con Gissel porque es una persona que me transmitió y me dio una visión de todo lo que podía llegar a cambiar. La elegí a ella porque sentí esa confianza y esa conexión, y estoy aquí, y de aquí no me voy!
                                        </span>
                                    </Card.Text>
                                </Card>
                            </div>



                            <div class="col d-flex justify-content-center">
                                <Card style={{ width: '24rem' }} className="h-100">
                                    <div class="row g-1 d-flex align-items-center">
                                        <div class="col-auto p-3">
                                            <img src={elvira}
                                                class="rounded-circle mb-4 mb-lg-0 shadow-2" alt="woman avatar" width="85"
                                                height="85" />
                                        </div>
                                        <div class="col ">
                                            <Card.Title className="subtitle mx-3">Elvira</Card.Title>

                                        </div>
                                    </div>
                                    <Card.Text className='p-4'>
                                        <FontAwesomeIcon icon={faQuoteLeft} className="icon-color fa-lg me-2" />
                                        <span className="text">
                                            Es una persona muy confiable, transmite mucha seguridad, tranquilidad. Es un espacio donde hay un intercambio de energía, haciendo las cosas con el corazón, que produce un enriquecimiento personal.
                                        </span>
                                    </Card.Text>
                                </Card>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div class="row row-cols-2 cards-wrapper d-flex justify-content-around">
                            <div class="col d-flex justify-content-center">
                                <Card style={{ width: '24rem' }} className="h-100">
                                    <div class="row g-1 d-flex align-items-center">
                                        <div class="col-auto p-3">
                                            <img src={magali}
                                                class="rounded-circle mb-4 mb-lg-0 shadow-2" alt="woman avatar" width="85"
                                                height="85" />
                                        </div>
                                        <div class="col ">
                                            <Card.Title className="subtitle mx-3">Magalí</Card.Title>

                                        </div>
                                    </div>
                                    <Card.Text className='p-4'>
                                        <FontAwesomeIcon icon={faQuoteLeft} className="icon-color fa-lg me-2" />
                                        <span className="text">
                                            Gissel maneja las herramientas que te permiten aumentar las posibilidades. Siento que la vida nos conectó, y a partir de que nos conocimos hay un montón de cosas que en mi vida cambiaron. Nos elegimos las dos por un montón de cosas, por su forma de ser, la sensibilidad, la seriedad, el amor que le pone a las cosas.
                                        </span>
                                    </Card.Text>
                                </Card>
                            </div>



                            <div class="col d-flex justify-content-center">
                                <Card style={{ width: '24rem' }} className="h-100">
                                    <div class="row g-1 d-flex align-items-center">
                                        <div class="col-auto p-3">
                                            <img src={lucia}
                                                class="rounded-circle mb-4 mb-lg-0 shadow-2" alt="woman avatar" width="85"
                                                height="85" />
                                        </div>
                                        <div class="col ">
                                            <Card.Title className="subtitle mx-3">Lucía</Card.Title>

                                        </div>
                                    </div>
                                    <Card.Text className='p-4'>
                                        <FontAwesomeIcon icon={faQuoteLeft} className="icon-color fa-lg me-2" />
                                        <span className="text">
                                            Te da mas confianza, alegría, y te permite encontrar otros espacios, que no son los convencionales,
                                            para poder desarrollarte y tener una vida más digna y alegre.
                                        </span>
                                    </Card.Text>
                                </Card>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>


                <Carousel activeIndex={index} onSelect={handleSelect} className="d-md-none second-carousel" interval={20000000}>
                    <Carousel.Item>
                        <Card style={{ width: '24rem' }} className="h-100">
                            <div class="row g-1 d-flex align-items-center">
                                <div class="col-auto p-3">
                                    <img src={estela}
                                        class="rounded-circle mb-4 mb-lg-0 shadow-2" alt="woman avatar" width="85"
                                        height="85" />
                                </div>
                                <div class="col ">
                                    <Card.Title className="subtitle mx-3">Estela</Card.Title>

                                </div>
                            </div>
                            <Card.Text className='p-4 pt-1 p-carousel'>
                                <FontAwesomeIcon icon={faQuoteLeft} className="icon-color fa-lg me-2" />
                                <span className="text text-second">
                                    Es increíble como me ha cambiado la vida, el estado de ánimo, la forma de relacionarme. Elegí este espacio con Gissel porque es una persona que me transmitió y me dio una visión de todo lo que podía llegar a cambiar.
                                    La elegí a ella porque sentí esa confianza y esa conexión, y estoy aquí, y de aquí no me voy!
                                </span>
                            </Card.Text>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div class="col">
                            <Card style={{ width: '24rem' }} className="h-100">
                                <div class="row g-1 d-flex align-items-center">
                                    <div class="col-auto p-3">
                                        <img src={elvira}
                                            class="rounded-circle mb-4 mb-lg-0 shadow-2" alt="woman avatar" width="85"
                                            height="85" />
                                    </div>
                                    <div class="col ">
                                        <Card.Title className="subtitle mx-3">Elvira</Card.Title>

                                    </div>
                                </div>
                                <Card.Text className='p-4 pt-1'>
                                    <FontAwesomeIcon icon={faQuoteLeft} className="icon-color fa-lg me-2" />
                                    <span className="text text-second">
                                        Es una persona muy confiable, transmite mucha seguridad, tranquilidad. Es un espacio donde hay un intercambio de energía, haciendo las cosas con el corazón, que produce un enriquecimiento personal.
                                    </span>
                                </Card.Text>
                            </Card>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '24rem' }} className="h-100">
                            <div class="row g-1 d-flex align-items-center">
                                <div class="col-auto p-3">
                                    <img src={magali}
                                        class="rounded-circle mb-4 mb-lg-0 shadow-2" alt="woman avatar" width="85"
                                        height="85" />
                                </div>
                                <div class="col ">
                                    <Card.Title className="subtitle mx-3">Magalí</Card.Title>

                                </div>
                            </div>
                            <Card.Text className='p-4 pt-1 p-carousel'>
                                <FontAwesomeIcon icon={faQuoteLeft} className="icon-color fa-lg me-2" />
                                <span className="text text-second">
                                    Gissel maneja las herramientas que te permiten aumentar las posibilidades. Siento que la vida nos conectó, y a partir de que nos conocimos hay un montón de cosas que en mi vida cambiaron. Nos elegimos las dos por un montón de cosas, por su forma de ser, la sensibilidad, la seriedad, el amor que le pone a las cosas.
                                </span>
                            </Card.Text>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '24rem' }} className="h-100">
                            <div class="row g-1 d-flex align-items-center">
                                <div class="col-auto p-3">
                                    <img src={lucia}
                                        class="rounded-circle mb-4 mb-lg-0 shadow-2" alt="woman avatar" width="85"
                                        height="85" />
                                </div>
                                <div class="col ">
                                    <Card.Title className="subtitle mx-3">Lucía</Card.Title>

                                </div>
                            </div>
                            <Card.Text className='p-4 pt-1 p-carousel'>
                                <FontAwesomeIcon icon={faQuoteLeft} className="icon-color fa-lg me-2" />
                                <span className="text text-second">
                                    Te da mas confianza, alegría, y te permite encontrar otros espacios,
                                    que no son los convencionales, para poder desarrollarte y tener una vida más digna y alegre.

                                </span>
                            </Card.Text>
                        </Card>
                    </Carousel.Item>

                </Carousel>
            </div>
        </div>
    )
}

export default Testimonios;

import './Masajes.css';
import NavbarComponent from "./General/Navbar";
import Footer from "./General/Footer";

import bg from "../img/astral.jpg";

/* import img1 from "../img/healyresonador.jpg"*/


import img1 from "../img/astral2.jpg";
import { Helmet } from 'react-helmet';
import img2 from "../img/tarotegipcio.jpg";

export const TerapiasCartas = () => {
    return (
        
        <>
        <Helmet>
            <title>Espacio Gissel - Cartas Natales</title>
            <meta 
                name="description"
                content="Conoce tu carta natal. Para hacer tu carta se utiliza la fecha y hora exacta de tu nacimiento. Ese es un momento único que forma ese mandala en el cielo, con la posición de los Astros que te regala dones únicos para llegar a brillar en tu Sol. Caminando por tu Ascendente charlaremos sobre tus aspectos, que son los caminos tensos (que vinimos a trascender) y los más relajados para aprovechar tus habilidades de guerrera/o, creativa/o, y con el amor, dinero, familia, trabajo, salud, sexualidad, curación y propósito entre otros."
            />
            <meta 
                name="keywords"
                content="Carta natal, Astrología, Carta Natal Montevideo"
            />
        </Helmet>
            <div>
                <div>
                    <section className="parallax img-p-1" style={{ backgroundImage: `url(${bg})` }} >
                        <NavbarComponent />
                        <div className="caption-left">
                            <ul>
                                <li>
                                    <a href="/">INICIO</a>
                                </li>
                                <span>/</span>
                                <li>TERAPIAS /CARTAS NATALES</li>
                            </ul>
                            <h1>CARTAS NATALES</h1>
                        </div>
                    </section>
                </div>
            </div>

            <div className="masajes-container pt-5 ">

                <h2 className="masajes-title text-center pb-5 pt-5">CONOCE TU CARTA NATAL...</h2>
                <div className="container d-flex flex-row pb-0 justify-content-between">
                    <div className="msj-img">
                        <img src={img1} alt="aromaterapia" width="400px" />
                    </div>
                    <div className="msj-text text">
                        Para hacer tu carta se utiliza la fecha y hora exacta de tu nacimiento. Ese es un momento único que forma ese mandala en el cielo, con la posición de los Astros que te regala dones únicos para llegar a brillar en tu Sol. Caminando por tu Ascendente charlaremos sobre tus aspectos, que son los caminos tensos (que vinimos a trascender) y los más relajados para aprovechar tus habilidades de guerrera/o, creativa/o, y con el amor, dinero, familia, trabajo, salud, sexualidad, curación y propósito entre otros.
                    </div>

                </div>

            </div>

            <div className="masajes-container pb-5">

                <h2 className="masajes-title text-center pb-5 pt-5">...Y QUÉ TE ESPERA EN EL FUTURO</h2>
                <div className="container d-flex flex-row-reverse pb-2 justify-content-between">
                    <div className=" text">
                        A demás de revelar aspectos personales, también es posible saber cómo te afectan los astros hoy, y cómo te afectarán en el futuro, revelando tendencias, 
                        posibilidades y oportunidades, para orientarnos sobre cómo actuar en los distintos aspectos de la vida, tanto en el presente, como en el futuro.
                    </div>

                </div>

            </div>

            <div className="masajes-container pt-5 ">

                <h2 className="masajes-title text-center pb-5 pt-2">TAROT EGIPCIO</h2>
                <div className="container d-flex flex-row-reverse pb-0 justify-content-between">
                    <div className="msj-img">
                        <img src={img2} alt="aromaterapia" width="400px" />
                    </div>
                    <div className="msj-text text">
                    El tarot egipcio nos da una guía muy completa, ya que además de utilizar la sabiduría de la numerologia y los símbolos, nos conecta con todo el cielo a través de los planetas y los signos. La tirada astrologica en forma de rueda nos permite acercarnos a una mirada más concreta en cada una las casas, como trabajo, dinero, salud, relaciones, hogar y propósito entre otras.
                    </div>

                </div>

            </div>

            <Footer />

        </>
    )
}
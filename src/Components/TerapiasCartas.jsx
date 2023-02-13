
import './Masajes.css';
import NavbarComponent from "./General/Navbar";
import Footer from "./General/Footer";

import bg from "../img/astral.jpg";

/* import img1 from "../img/healyresonador.jpg"
import img2 from "../img/beneficios.jpg" */

import img1 from "../img/astral2.jpg";

export const TerapiasCartas = () => {
    return (
        <>
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
                        Para hacer una carta natal, se utiliza la fecha y hora exacta de tu nacimiento, para revelar 
                        la posición de los astros en el cielo. Esto permite conocer aspectos de tu personalidad, 
                        lo que más te representa como persona, el cómo te expresas y cómo se expresan tus emociones, 
                        para que puedas conectar con tu verdadera identidad, encontrar respuestas sobre tu vida, y descubrir 
                        aspectos de tí mismo que quizás permanecen ocultos.
                    </div>

                </div>

            </div>

            <div className="masajes-container pb-5">

                <h2 className="masajes-title text-center pb-5 pt-5">...Y QUÉ TE ESPERA EN EL FUTURO</h2>
                <div className="container d-flex flex-row-reverse pb-5 justify-content-between">
                    <div className=" text">
                        A demás de revelar aspectos personales, también es posible saber cómo te afectan los astros hoy, y cómo te afectarán en el futuro, revelando tendencias, 
                        posibilidades y oportunidades, para orientarnos sobre cómo actuar en los distintos aspectos de la vida, tanto en el presente, como en el futuro.
                    </div>

                </div>

            </div>

            <Footer />

        </>
    )
}
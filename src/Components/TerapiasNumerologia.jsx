import './Masajes.css';
import NavbarComponent from "./General/Navbar";
import Footer from "./General/Footer";

import bg from "../img/numerologiabg.jpg"
import { Helmet } from 'react-helmet';

/* import img1 from "../img/healyresonador.jpg"
import img2 from "../img/beneficios.jpg"
 */

export const TerapiasNumerologia = () => {
    return (
        <>
            <Helmet>
                <title>Espacio Gissel - Numerologia</title>
                <meta 
                    name="description"
                    content="En una carta numerológica, se precisa saber tu fecha de nacimiento y tu nombre y apellido, ya que éstos, y los números que generan tienen distintas vibraciones en el universo, y marcan los aspectos más importantes de tu vida."
                />
                <meta 
                    name="keywords"
                    content="Numerología, Numerologia Montevideo"
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
                                <li>TERAPIAS / NUMEROLOGÍA</li>
                            </ul>
                            <h1>NUMEROLOGÍA</h1>
                        </div>
                    </section>
                </div>
            </div>

            <div className="masajes-container pt-5 ">

                <h2 className="masajes-title text-center pb-5 pt-5">CONOCE TU CARTA NUMEROLÓGICA</h2>
                <div className="container d-flex flex-row-reverse pb-5 justify-content-between">
                    <div className="msj-img">
                        <img src={bg} alt="aromaterapia" width="400px" />
                    </div>
                    <div className="msj-text text">
                        En una carta numerológica, se precisa saber tu fecha de nacimiento y tu nombre y apellido, ya que éstos, y los números que generan tienen distintas vibraciones en el universo, y marcan los aspectos más importantes de tu vida.
                        <br></br> <br></br>
                        La lectura de la carta numerológica te conecta con tu misión en esta vida, con tus vidas pasadas y con las cosas que podría deparar tu futuro. También permite revelar aspectos de tu vida y personalidad para que puedas orientar mejor tus decisiones y resolver las dudas que siempre tuviste acerca de tu existencia en este mundo.
                    </div>

                </div>

            </div>

            {/* <div className="masajes-container pb-5">

                <div className="container d-flex flex-row-reverse pb-5 justify-content-between">
                    <div className=" text">
                        Me gusta nombrar a las piedras calientes como lo que son: piedras volcánicas que fueron creadas hace mucho tiempo en el volcán, con todo el poder de la tierra, surgen de el choque de la  roca líquida y su enfriamiento con los iones .Al calentarla en el gabinete, estas abuelas de la tierra recuerdan su fuerza energética, sus minerales y su sabiduría.
                        Con su calor alivian el espasmo muscular y las contracturas que están por debajo. Ademas de ser una caricia y conexión de la tierra con nosotros.
                    </div>

                </div>

            </div> */}

            <Footer />

        </>
    )
}
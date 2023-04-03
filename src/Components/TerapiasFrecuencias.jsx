import './Masajes.css';
import NavbarComponent from "./General/Navbar";
import Footer from "./General/Footer";

import bg from "../img/frecuenciasbg.jpg"

import img1 from "../img/healyresonador.jpg"
import img2 from "../img/frecuenciasbg3.jpg"
import { Helmet } from 'react-helmet';


export const TerapiasFrecuencias = () => {
    return (
        <>
        <Helmet>
            <title>Espacio Gissel - Terapia de Frecuencias</title>
            <meta 
                name="description"
                content="El resonador Healy® es un dispositivo que utiliza programas de Frecuencia de Microcorriente Individualizada (IMF) para la armonización de su Campo Bioenergético."
            />
            <meta 
                name="keywords"
                content="Healy, Resonador, Terapia de frecuencia, Microcorriente, Healy Montevideo"
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
                                <li>TERAPIAS /TERAPIA DE FRECUENCIAS</li>
                            </ul>
                            <h1>TERAPIA DE FRECUENCIAS</h1>
                        </div>
                    </section>
                </div>
            </div>

            <div className="masajes-container pt-5 pb-5">

                <h2 className="masajes-title text-center pb-5 pt-5 ">TERAPIA DE FRECUENCIAS</h2>
                <div className="container d-flex flex-row pb-5 justify-content-between">
                    <div className="msj-img">
                        <img src={img1} alt="aromaterapia" width="400px" />
                    </div>
                    <div className="msj-text text">
                    El resonador Healy® es un dispositivo portátil que utiliza programas de Frecuencias de Microcorriente Individualizada (IMF) para la armonización de su Campo Bioenergético, el tratamiento del <b>dolor</b>; así como para <b>apoyar</b> el tratamiento de enfermedades y afecciones mentales como la depresión, la ansiedad o los transtornos del sueño. También sirve para <b>reforzar</b> tu sistema inmune, mejorar el rendimiento deportivo y también con fines estéticos sobre la <b>piel</b>, y de <b>belleza</b> en general.
                    Healy no vino a curar sino a restablecer el equilibrio electrolítico y eléctrico de nuestro organismo con diversas técnicas, tales como <b>biorresonancia cuántica, microcorrientes, frecuencias y análisis de aura. </b>
                     Healy es ciencia y conciencia, y está hecho en base a la experiencia de cientos de terapeutas con el uso de la tecnología tesla.
                    </div>

                </div>

                <hr />

                <h2 className="masajes-title text-center pb-5 pt-5">MAS INFORMACION...</h2>
                <div className="container d-flex flex-row-reverse pb-5 justify-content-between">
                    <div className="msj-img">
                        <img src={img2} alt="aromaterapia" width="400px" />
                    </div>
                    <div className="msj-text text">
                    Sus campos de aplicación son los siguientes:
                    <li>Afecciones bioenergéticas locales, agudas o crónicas</li>
                    <li>Para numerosos trastornos y órganos, apoyo a través del equilibrio bioenergético</li>
                    <li>Ayuda y equilibrio en la ansiedad y la depresión</li>
                    <li>Un mejor descanso y mejora del sueño</li>
                    <li>Ayuda a alcanzar metas deportivas</li>
                    <li>Ayuda a la preparación para exámenes y pruebas, mejorando el enfoque mental</li>
                    <li>Relajación más rápida y una mejor gestión del estrés</li>
                    <li>Mejora el flujo de energía vital</li>
                    <li>Ayuda a activar y armonizar los centros energéticos</li>
                    <li>Apoyo en los tratamientos de belleza interior y exterior</li>
                    <br></br>
                    También en mi espacio gestionamos que otros profesionales de la salud incluyan en sus terapias este dispositivo con tanto éxito como yo. <b>Te esperamos!</b>
                    </div>

                </div>


            </div>

            <Footer />

        </>
    )
}
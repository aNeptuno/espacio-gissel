
import './Masajes.css';
import NavbarComponent from "./General/Navbar";
import Footer from "./General/Footer";

import bg from "../img/aromaterapia3.jpg"

import img1 from "../img/aromaterapia1.jpg"
import img2 from "../img/aromaterapia2.jpg"
import just from "../img/just.jpg"

export const TerapiasAromaterapia = () => {
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
                                <li>TERAPIAS / AROMATERAPIA</li>
                            </ul>
                            <h1>AROMATERAPIA</h1>
                        </div>
                    </section>
                </div>
            </div>

            <div className="masajes-container pt-5 pb-5">

                <h2 className="masajes-title text-center pb-5 pt-5 ">¿QUÉ ES LA AROMATERAPIA?</h2>
                <div className="container d-flex flex-row pb-5 justify-content-between">
                    <div className="msj-img">
                        <img src={img1} alt="aromaterapia" width="400px" />
                    </div>
                    <div className="msj-text text">
                        La aromaterapia es una forma de medicina alternativa basada en el uso de aceites esenciales,
                        o esencias aromáticas con el objetivo de mejorar el bienestar físico y psicológico, tratando distintos síntomas o afecciones.<br></br>
                        Se puede aplicar en forma de masaje, y en combinación con otras terapias, como también a través de la respiración,
                        ya que son los olores de las esencias los que generan efectos relajantes, estimulantes o revitalizantes.
                    </div>

                </div>

                <hr />

                <h2 className="masajes-title text-center pb-5 pt-5">BENEFICIOS</h2>
                <div className="container d-flex flex-row-reverse pb-5 justify-content-between">
                    <div className="msj-img">
                        <img src={img2} alt="aromaterapia" width="400px" />
                    </div>
                    <div className="msj-text text">
                        Hay diversos aceites esenciales, con propiedades analgésicas, antibióticas, sedantes, expectoranes y diuréticas, 
                        que se se utilizan para tratar distintos síntomas y problemas físicos como los malestares gastrointestinales, las condiciones 
                        de la piel, el dolor e irregularidades menstruales, dolores de cabeza, insomnio, quemaduras, dolores musculares, problemas circulatorios 
                        e infecciones respiratorias.<br></br><br></br>

                        Como trabaja estimulando el sistema límbico del cerebro, donde se producen las emociones, también pueden usarse para tratar algunas 
                        afecciones psicológicas y emocionales tales como el estrés, la depresión trastornos del estado de ánimo, ansiedad o tensión nerviosa, 
                        y puede produir efectos relajantes, equilibradores, estimulantes,  afrodisíacos y estimulantes de la mente.
                        Con su calor alivian el espasmo muscular y las contracturas que están por debajo. Ademas de ser una caricia y conexión de la tierra con nosotros.
                    </div>

                </div>

                <hr />

                <h2 className="masajes-title text-center pb-5 pt-5 ">ESENCIAS JUST®</h2>
                <div className="container d-flex flex-row pb-5 justify-content-between">
                    <div className="msj-img">
                        <img src={just} alt="descontracturante" width="400px" />
                    </div>
                    <div className="msj-text text">
                        En espacio Gissel contamos con aromas esenciales Just®, que a diferencia de... que tienen el beneficio de... que son mejores porque... 
                    </div>

                </div>




            </div>

            <Footer />

        </>
    )
}

import './Masajes.css';
import NavbarComponent from "./General/Navbar";
import Footer from "./General/Footer";

import bg from "../img/aromaterapia3.jpg"

import img1 from "../img/aromaterapia1.jpg"
import img2 from "../img/aromaterapia2.jpg"
import descontracturante from "../img/descontracturante.jpg"

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
                        La Reflexología es un tratamiento holístico basado en la medicina china de que hay zonas y puntos en los pies,
                        las manos y las orejas que están unidos a través del sistema nervioso a otras partes del cuerpo.
                        Con la estimulación de estos puntos se consigue corregir la circulación local y por lo tanto eliminar
                        las acumulaciones de toxinas y otras sustancias no deseables, mejorando el estado de salud del paciente.
                    </div>

                </div>

                <hr />

                <h2 className="masajes-title text-center pb-5 pt-5">BENEFICIOS</h2>
                <div className="container d-flex flex-row-reverse pb-5 justify-content-between">
                    <div className="msj-img">
                        <img src={img2} alt="aromaterapia" width="400px" />
                    </div>
                    <div className="msj-text text">
                        Me gusta nombrar a las piedras calientes como lo que son: piedras volcánicas que fueron creadas hace mucho tiempo en el volcán, con todo el poder de la tierra, surgen de el choque de la  roca líquida y su enfriamiento con los iones .Al calentarla en el gabinete, estas abuelas de la tierra recuerdan su fuerza energética, sus minerales y su sabiduría.
                        Con su calor alivian el espasmo muscular y las contracturas que están por debajo. Ademas de ser una caricia y conexión de la tierra con nosotros.
                    </div>

                </div>

                <hr />

                <h2 className="masajes-title text-center pb-5 pt-5 ">ALGO MAS QUE SE QUIERA DECIR</h2>
                <div className="container d-flex flex-row pb-5 justify-content-between">
                    <div className="msj-img">
                        <img src={descontracturante} alt="descontracturante" width="400px" />
                    </div>
                    <div className="msj-text text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae illum eos doloribus repellat voluptatum.
                    </div>

                </div>




            </div>

            <Footer />

        </>
    )
}
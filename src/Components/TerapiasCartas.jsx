
import NavbarComponent from "./General/Navbar";
import Footer from "./General/Footer";

import bg from "../img/astral.jpg"

/* import img1 from "../img/healyresonador.jpg"
import img2 from "../img/beneficios.jpg" */


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

                <h2 className="masajes-title text-center pb-5 pt-5">CONOCE TU CARTA NATAL</h2>
                <div className="container d-flex flex-row-reverse pb-5 justify-content-between">
                    <div className="msj-img">
                        <img src={bg} alt="aromaterapia" width="400px" />
                    </div>
                    <div className="msj-text text">
                        Me gusta nombrar a las piedras calientes como lo que son: piedras volcánicas que fueron creadas hace mucho tiempo en el volcán, con todo el poder de la tierra, surgen de el choque de la  roca líquida y su enfriamiento con los iones .Al calentarla en el gabinete, estas abuelas de la tierra recuerdan su fuerza energética, sus minerales y su sabiduría.
                        Con su calor alivian el espasmo muscular y las contracturas que están por debajo. Ademas de ser una caricia y conexión de la tierra con nosotros.
                    </div>

                </div>

            </div>

            <div className="masajes-container pb-5">

                <div className="container d-flex flex-row-reverse pb-5 justify-content-between">
                    <div className=" text">
                        Me gusta nombrar a las piedras calientes como lo que son: piedras volcánicas que fueron creadas hace mucho tiempo en el volcán, con todo el poder de la tierra, surgen de el choque de la  roca líquida y su enfriamiento con los iones .Al calentarla en el gabinete, estas abuelas de la tierra recuerdan su fuerza energética, sus minerales y su sabiduría.
                        Con su calor alivian el espasmo muscular y las contracturas que están por debajo. Ademas de ser una caricia y conexión de la tierra con nosotros.
                    </div>

                </div>

            </div>

            <Footer />

        </>
    )
}
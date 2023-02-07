
import NavbarComponent from "./General/Navbar";
import Footer from "./General/Footer";

import bg from "../img/flores.jpg"

import img1 from "../img/floresbach.png"
import img2 from "../img/beneficios.jpg"
import img3 from "../img/mediterraneo.jpg"

export const TerapiasFlores = () => {
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
                                <li>TERAPIAS / FLORES DE BACH Y MEDITERRÁNEO</li>
                            </ul>
                            <h1>FLORES DE BACH Y MEDITERRÁNEO</h1>
                        </div>
                    </section>
                </div>
            </div>

            <div className="masajes-container pt-5 pb-5">

                <h2 className="masajes-title text-center pb-5 pt-5 ">FLORES DE BACH</h2>
                <div className="container d-flex flex-row pb-5 justify-content-between">
                    <div className="msj-img">
                        <img src={img1} alt="aromaterapia" width="400px" />
                    </div>
                    <div className="msj-text text">
                        “La curación debe emanar de nuestro interior, por medio del conocimiento y la corrección de nuestras faltas, y la armonización de nuestro Ser, para que se dé una curación correcta no debe utilizarse absolutamente nada que releve al paciente de su propia responsabilidad; por el contrario, sólo deben utilizarse aquellos recursos que lo ayuden a sobreponerse a sus defectos”.
                        Edward Bach
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

                <h2 className="masajes-title text-center pb-5 pt-5 ">FLORES DEL MEDITERRÁNEO</h2>
                <div className="container d-flex flex-row pb-5 justify-content-between">
                    <div className="msj-img">
                        <img src={img3} alt="descontracturante" width="400px" />
                    </div>
                    <div className="msj-text text">
                        “Según la formulación de Hahnemann, toda curación que no proviene del interior, es nociva, y que la cura aparente del cuerpo lograda mediante métodos materialistas, y obtenida sólo a través de la acción de agentes externos, sin autoayuda, puede ciertamente aportar cierto alivio orgánico, pero daña nuestras Naturalezas Superiores, ya que la lección ha quedado sin aprender, y el defecto no ha sido erradicado”.
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




            </div>

            <Footer />

        </>
    )
}
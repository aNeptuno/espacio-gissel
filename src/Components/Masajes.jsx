
import './Masajes.css';
import NavbarComponent from "./General/Navbar";
import Footer from "./General/Footer";

import bg from "../img/masajesbg1.jpg";

import reflexologia from "../img/reflexologia.jpg"
import piedras from "../img/piedrascalientes.jpg"
import descontracturante from "../img/descontracturante.jpg"
import madera from "../img/madera.jpg"

import terapeuticos from "../img/terapeuticos.jpg"
import digitopuntura from "../img/digitopuntura.jpg"
import esteticos from "../img/esteticos.jpg"
import reafirmantes from "../img/reafirmantes.jpg"


export const Masajes = () => {
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
                                <li>MASAJES</li>
                            </ul>
                            <h1>MASAJES</h1>
                        </div>
                    </section>
                </div>
            </div>

            <div className="container pt-5 pb-3">
                <span id="Reflexologia"></span>
                <h1 className="title orange pt-5 pb-5 text-center">Cada masaje es diferente</h1>
                <h2 className="subtitle orange pb-4 text-center">Experimenta las modalidades de masaje adecuadas para ti, en el momento y contexto de tu curación global.</h2>
            </div>

            <div className="masajes-container">

                <div id="Reflexologia"></div>
                <h2 className="masajes-title text-center pb-5 pt-5">REFLEXOLOGIA</h2>
                <div className="container d-flex flex-row pb-5 justify-content-between p-0">
                    <div className="msj-img">
                        <img src={reflexologia} alt="reflexologia" width="400px" />
                    </div>
                    <div className="msj-text text">
                        La Reflexología es un tratamiento holístico basado en la medicina china de que hay zonas y puntos en los pies,
                        las manos y las orejas que están unidos a través del sistema nervioso a otras partes del cuerpo.
                        Con la estimulación de estos puntos se consigue corregir la circulación local y por lo tanto eliminar
                        las acumulaciones de toxinas y otras sustancias no deseables, mejorando el estado de salud del paciente.

                        <span id="PiedrasCalientes"></span>
                    </div>

                </div>

                <hr />

                <h2 className="masajes-title text-center pb-5 pt-5">PIEDRAS CALIENTES</h2>
                <div className="container d-flex flex-row-reverse pb-5 justify-content-between p-0">
                    <div className="msj-img">
                        <img src={piedras} alt="piedras calientes" width="400px" />
                    </div>
                    <div className="msj-text text">
                        Me gusta nombrar a las piedras calientes como lo que son: piedras volcánicas que fueron creadas hace mucho tiempo en el volcán, con todo el poder de la tierra, surgen de el choque de la  roca líquida y su enfriamiento con los iones .Al calentarla en el gabinete, estas abuelas de la tierra recuerdan su fuerza energética, sus minerales y su sabiduría.
                        Con su calor alivian el espasmo muscular y las contracturas que están por debajo. Ademas de ser una caricia y conexión de la tierra con nosotros.

                        <span id="Descontracturantes"></span>
                    </div>

                </div>

                <hr />

                <h2 className="masajes-title text-center pb-5 pt-5 ">DESCONTRACTURANTES</h2>
                <div className="container d-flex flex-row pb-5 justify-content-between p-0">
                    <div className="msj-img">
                        <img src={descontracturante} alt="descontracturante" width="400px" />
                    </div>
                    <div className="msj-text text">
                        Los masajes descontracturantes tienen como objetivo relajar los músculos rígidos y tensos a causa del estrés, para generar un bienestar en el cuerpo que se traduzca a su vez en un bienestar emocional.
                        A diferencia de un masaje relajante, en este se aplican técnicas manuales de una mayor intensidad para lograr disolver las contracturas, que se producen por las malas posturas, la falta de descanso, el estrés o el sedentarismo.
                        La eliminación de tensiones en los grupos musculares contribuyen al correcto funcionamiento muscular y articular, y ayudan a corregir aquellos desequilibrios que están causando el malestar.
                        Estas técnicas pueden ser aplicadas en combinación con otros tipos de masajes o terapias para lograr mejores resultados con más beneficios.

                        <span id="Maderoterapia"></span>
                    </div>

                </div>

                <hr />

                <h2 className="masajes-title text-center pb-5 pt-5">MADEROTERAPIA</h2>
                <div className="container d-flex flex-row-reverse pb-5 justify-content-between p-0">
                    <div className="msj-img">
                        <img src={madera} alt="maderoterapia" width="400px" />
                    </div>
                    <div className="msj-text text">
                        Este tratamiento consiste en aplicar un masaje empleando diferentes utensilios de madera especialmente diseñados para equilibrar la energía del paciente, remodelar y tonificar su cuerpo, y combatir la celulitis. La maderoterapia aplicada a muslos y glúteos es de gran ayuda para remodelar la figura.Los resultados dependerán de cada persona y también de la frecuencia. El empleo de estos implementos de madera se ha popularizado en su combate contra la celulitis, pero también se le puede dar otros usos.
                        Y alejándose del plano estético puede mejorar dolencias de espalda y articulares, así como ahuyentar el estrés.
                        <span id="Terapeuticos"></span>
                    </div>

                </div>

                <hr />

                <h2 className="masajes-title text-center pb-5 pt-5">TERAPÉUTICOS</h2>
                <div className="container d-flex flex-row pb-5 justify-content-between p-0">
                    <div className="msj-img">
                        <img src={terapeuticos} alt="terapeuticos" width="400px" />
                    </div>
                    <div className="msj-text text">
                        Los masajes terapéuticos consisten en la manipulación de tejidos, una técnica universal de fácil aplicación y disponibilidad que tiene finalidad terapéutica, higiénica o deportiva.
                        <span id="Digitopuntura"></span>
                    </div>

                </div>

                <hr />

                <h2 className="masajes-title text-center pb-5 pt-5">DIGITOPUNTURA</h2>
                <div className="container d-flex flex-row-reverse pb-5 justify-content-between p-0">
                    <div className="msj-img">
                        <img src={digitopuntura} alt="digitopuntura" width="400px" />
                    </div>
                    <div className="msj-text text">
                        La digitopuntura es una técnica ancestral, se cree por pinturas encontradas, que su práctica comenzó en la India hace más de 5000 años.
                        Según la medicina tradicional china, el cuerpo humano contiene energía, esta se denomina chi o ki, es transportada por unos vasos conductores llamados meridianos que, entrelazados entre sí, conectan todos los órganos del cuerpo. En estos meridianos hay diferentes puntos, son como una especie de nódulos o bultos, en donde por diferentes razones puede quedar la energía bloqueada.

                        Utilizando la digitopuntura, una vez ubicada la zona en la que se encuentran los puntos, utilizando dedos o nudillos se ejerce presión por unos segundos sobre ellos, para restablecer de nuevo la circulación del chi a través del cuerpo, aliviando de esta manera distintas enfermedades o dolencias que afectan al paciente.
                        <span id="Esteticos"></span>
                    </div>

                </div>

                <hr />

                <h2 className="masajes-title text-center pb-5 pt-5">ESTÉTICOS CON ULTRASONIDO</h2>
                <div className="container d-flex flex-row pb-5 justify-content-between p-0">
                    <div className="msj-img">
                        <img src={esteticos} alt="esteticos" width="400px" />
                    </div>
                    <div className="msj-text text">
                        Es una técnica que permite llegar a todos los contornos corporales y entre sus beneficios se encuentran además, una mejora de la circulación o mayor elasticidad en la piel.
                        Como se trata de un masaje suave muy específico, proporciona una relajación física que ayuda a fluir la energía de nuestro cuerpo.
                        <span id="Reafirmantes"></span>
                    </div>

                </div>

                <hr />

                <h2 className="masajes-title text-center pb-5 pt-5">REAFIRMANTES CON ELECTRODOS</h2>
                <div className="container d-flex flex-row-reverse pb-5 justify-content-between p-0">
                    <div className="msj-img">
                        <img src={reafirmantes} alt="reafirmantes" width="400px" />
                    </div>
                    <div className="msj-text text">
                        La electro estimulación muscular utiliza la corriente eléctrica para simular los impulsos que contraen la musculatura del organismo. En Espacio Gissel utilizamos electrodos de ondas rusas y cuadradas.
                        Estas te ayudan a tener una estimulación profunda del músculo con la menor sensación.
                        <span id="Digitopuntura"></span>
                    </div>

                </div>




            </div>


            <Footer /> 

        </>
    )
}

import './Masajes.css';
import NavbarComponent from "./General/Navbar";
import Footer from "./General/Footer";

import bg from "../img/flores.jpg"
import bg2 from "../img/forest-parallax.jpg"

import img1 from "../img/floresbach.png"
import img3 from "../img/mediterraneo.jpg" /* esta esta buena */
import img4 from "../img/flores2.jpg"
import img5 from "../img/lavanda.jpg"
import img6 from "../img/GisselFlores.jpg"

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
                        <img src={img4} alt="flores-gissel" width="400px" />
                    </div>
                    <div className="msj-text text">
                        <q><i>La curación debe emanar de nuestro interior, por medio del conocimiento y la corrección de nuestras faltas, y la armonización de nuestro Ser, para que se dé una curación correcta no debe utilizarse absolutamente nada que releve al paciente de su propia responsabilidad;
                            por el contrario, sólo deben utilizarse aquellos recursos que lo ayuden a sobreponerse a sus defectos</i></q>.
                        <p className="text-right">-Edward Bach</p>
                    </div>

                </div>

                <hr />

                <h2 className="masajes-title text-center pb-5 pt-5">¿QUÉ SON LAS FLORES DE BACH?</h2>
                <div className="container d-flex flex-row-reverse pb-5 justify-content-between">
                    <div className="msj-img">
                        <img src={img1} alt="flores" width="400px" />
                    </div>
                    <div className="msj-text text">
                        La utilización de las flores con fines terapéuticos se remonta a tiempos muy remotos. Así es recogido por diferentes
                        tradiciones como la Celta, la Taoísta, la Incaica o las del valle del Indo, entre otras. <br></br>
                        Quien “descubre” y da la forma terapéutica moderna a las Esencias Florales, es el Dr. Edward Bach (1886-1936), médico,
                        inmunólogo y homeópata galés. Consigue elaborar 38 Esencias Florales (conocidas como Las Flores de Bach) y estructurar un método de trabajo con ellas.
                        Esta extraordinaria contribución de Bach ha posibilitado un “redescubrimiento” de la riqueza energética y curativa del reino vegetal.
                        Trabajos de campo e investigación con las flores permiten en la actualidad acortar tiempos en las crisis curativas (enfermedades),
                        posibilitando la resolución de conflictos en un tiempo más breve. <br></br>
                        Este nuevo enfoque valora el entorno social y el equilibrio emocional de las personas como factores que intervienen en la consecución de un estado
                        saludable individual.
                    </div>

                </div>

                <hr />

                <h2 className="masajes-title text-center pb-5 pt-5">BENEFICIOS</h2>
                <div className="container d-flex flex-row pb-5 justify-content-between ">
                    {/* <div className="msj-img">
                        <img src={img2} alt="aromaterapia" width="400px" />
                    </div> */}
                    <div className="msj-text text w-100">
                        Su actuación más evidente o evaluable es de <b>incidencia emocional</b> y por lo tanto, son de utilidad contrastada en
                        los procesos de <b>estado de ánimo</b> asociados a todo tipo de <b>desequilibrios</b> de los seres vivos.
                        Las esencias florales potencian las virtudes opuestas a estados emocionales disarmónicos, que causan sufrimiento (stress, miedo, incertidumbre),
                        permitiendo <b>equilibrar y mantener una apreciación más armónica en un medio de vida cambiante como el actual.</b> Actúan en las causas profundas
                        y sutiles de los conflictos humanos. Desde el punto de vista de la terapia floral lo importante a observar, en un proceso de enfermedad,
                        no radica en los síntomas que la persona experimenta físicamente. La importancia está en la <b>valoración de la globalidad
                            emocional de la persona y la relación que mantiene consigo misma y con su entorno</b>; siendo prioritario considerar que no
                        existen enfermedades sino enfermos. Para lo cual, será fundamental tener en cuenta la apreciación subjetiva del individuo
                        respecto a su existencia y sentimientos, esto es, valorar lo más posible la “vivencia interior” del sujeto.
                    </div>

                </div>

                <section className="parallax2 img-p-1" style={{ backgroundImage: `url(${bg2})` }}></section>
                <h2 className="masajes-title text-center pb-5 pt-5 bg-white">¿CÓMO TRABAJAN LAS ESENCIAS FLORALES?</h2>
                <div className="container d-flex flex-row-reverse pb-5 justify-content-between bg-white">
                    {/* <div className="msj-img">
                            <img src={img4} alt="flores" width="400px" />
                        </div>  */}
                    <div className="msj-text text w-100">
                        <p>
                            Un aspecto importante de las esencias florales, del que se ha hablado muy poco, es respecto a la forma de acción. Los seres vivos tienen una estructura energética similar a un campo electromagnético de baja intensidad; dicho campo tiene un sistema de frecuencias complejo que, entre otras cosas, repercute en el correcto funcionamiento bioquímico así como el equilibrio biológico y psíquico. Según la interacción, más o menos conflictiva con el entorno, estas frecuencias pueden ser alteradas y afectar, dependiendo del sector del campo electromagnético, al equilibrio mental, emocional o físico. Dado que dicho campo es un conjunto de sectores intercomunicados, toda alteración de sectores de “alta frecuencia” (psiquismo, emoción) no restaurada puede extenderse a sectores de “frecuencia media o baja” (funcional, físico) y viceversa; dicho de otro modo, la conflictividad en la interacción con el entorno puede desencadenar alteraciones psicoemocionales que de no resolverse, pueden tener consecuencias somáticas; igualmente, la incapacidad de asumir las alteraciones físicas puede extender el desequilibrio a nivel psicoemocional.
                        </p>
                        <p>
                            Las esencias florales superponen “frecuencias armónicas” concretas a las alteraciones de frecuencia de sectores específicos del campo electromagnético, estimulando con ello la capacidad restauradora del propio sistema energético. Las esencias florales tienen la capacidad vibracional de ayudar a restaurar especialmente los sectores de “alta frecuencia” (emocional) lo que trae como consecuencia la armonización de la personalidad con el medio y el nivel esencial o mundo interno.
                        </p>

                        <p>
                            Cuando la persona armoniza su mundo interno, en la mayoría de los casos, los síntomas concretos remiten, se alivian o desaparecen.
                        </p>
                    </div>

                </div>
                <section className="parallax2 img-p-1" style={{ backgroundImage: `url(${bg2})` }}></section>
                <hr />

                <h2 className="masajes-title text-center pb-5 pt-5 ">FLORES DEL MEDITERRÁNEO ®</h2>
                <div className="container d-flex flex-row pb-5 justify-content-between">
                    <div className="msj-img">
                        <img src={bg} alt="descontracturante" width="400px" />
                    </div>
                    <div className="msj-text text">
                        “Según la formulación de Hahnemann, toda curación que no proviene del interior, es nociva, y que la cura aparente del cuerpo lograda mediante métodos materialistas, y obtenida sólo a través de la acción de agentes externos, sin autoayuda, puede ciertamente aportar cierto alivio orgánico, pero daña nuestras Naturalezas Superiores, ya que la lección ha quedado sin aprender, y el defecto no ha sido erradicado”.
                    </div>

                </div>

                <h2 className="masajes-title text-center pt-5">¿QUÉ SON LAS ESENCIAS FLORALES DEL MEDITERRÁNEO?</h2>
                <div className="container d-flex flex-row-reverse pb-4 pt-5 justify-content-between">
                    <div className="msj-img">
                        <img src={img6} alt="aromaterapia" width="400px" />
                    </div>
                    <div className="msj-text text">
                        Las Esencias Florales del Mediterráneo o las nuevas esencias, como se denominan, surgieron en los años noventa como una alternativa nueva en el mundo de la terapéutica floral.
                        Una terapia nueva, para tratar los requisitos del nuevo mundo. Son creadas y elaboradas bajo las estrictas normas de Bach, por el Dr Pedro Lopez Clemente (Investigador Geobiologo, Naturópata y Virólogo Español), 
                        creando varios sistemas de Flores de Nueva Generación que actúan más como onda que como particulas. 
                        Estos sistemas van profundizando los niveles de cura o sanación de acuerdo albornoces de cada individuo.
        
                    </div>

                </div>

                <div className="container msj-text text w-100">
                    <p className='pt-1 pb-1'>Las esencias del Mediterráneo son flores más específicas y adecuadas para estos tiempos donde existen otros cambios como:</p>

                    <li>Niños con TDH y afecciones de la expresión oral ( habla ), oído (escucha ,) y visión.</li> 
                    <li>Cambios en la sexualidad y roles Masculino/Femenino.</li>
                    <li>Adicciones:ayuda en el estado de abstinencia y comportamiento   compulsivo como "Árnica y Don Diego de Día."</li>
                    <li>Reducción de Hipnosis y Linealidad con los abusos de la informática, TV, y redes sociales como "Copa de los Ángeles"</li>
                    <li>Desbalances Hormonales.</li>
                    <li>Ayuda a pacientes que estén en procesos de Constelaciones o biodecodificacion a conectar con memorias del inconciente y 
                        trabajar la  mirada inadecuada de madre o padre por apego o abandono entre tantas más.</li>
                </div>

                <div className="container msj-text text w-100 pt-5">
                    <p>Las Esencias Florales del Mediterráneo fueron obtenidas de flores típicas de la cuenca mediterránea en Europa, constituyen un set de 40 esencias distintas que conforman un sistema cerrado completo cubriendo
                        la mayor parte de las necesidades en el alivio de las alteraciones emocionales más frecuentes en el ser humano.</p>
                        
                    <div className="d-flex flex-row text-list">
                        <ol className="w-50">
                            <li>AGAVE REAL - Agave centaury</li>
                            <li>AJO SALVAJE - Allium angulosum</li>
                            <li>ALBARICOQUE -Prunus armeniaca</li>
                            <li>ALGODON -  Gossypium arboreum</li>
                            <li>ALMENDRO - Prunus amygdalus</li>
                            <li>AMARANTO - Amaranthus hipochondriacus</li>
                            <li>ARNICA- Arnica montana</li>
                            <li>BOTON DE ORO - Ranunculus acris</li>
                            <li>CALABACIN - Cucúrbita pepo</li>
                            <li>CLAVEL DE INDIAS - Tagetes patula</li>
                        </ol>
                        <ol start="11" className="w-50">
                            <li>CONSUELDA - Simpytum officinalis</li>
                            <li>CONSUELDA MENOR - Prunella vulgaris</li>
                            <li>COPA DE LOS ANGELES - Narcissus triandrus</li>
                            <li>CORAZONCILLO - Dicentra spectabilis</li>
                            <li>COSMOS - Cosmos bipinnatus</li>
                            <li>DIENTE DE LEON -Taraxacum officinale</li>
                            <li>DON DIEGO DE DIA - Ipomea purpúrea</li>
                            <li>ENELDO - Anethum graveolens</li>
                            <li>EPILOBIO - Epilobium angustifolium</li>
                            <li>ERINGIO AZUL -  Eryngium aquifolium</li>
                        </ol>
                    </div>

                    <div className="d-flex flex-row text-list">
                        <ol start="21" className="w-50">
                            <li>ESPINO BLANCO -  Crataegus oxyacantha</li>
                            <li>GIRASOL - Helianthus annuus</li>
                            <li>JAZMÍN - Jasminum officinale</li>
                            <li>LAVANDA - Lavendula officinalis</li>
                            <li>LILA - Syringa vulgaris</li>
                            <li>LIRIO MARIPOSA - Calochortus leichtlinii</li>
                            <li>MALVA - Malva sylvestris</li>
                            <li>MANZANILLA - Matricaria chamomilla</li>
                            <li>MILENRAMA - Achillea millefolium</li>
                            <li>MUERDAGO - Viscum álbum</li>
                        </ol>
                        <ol start="31" className="w-50">
                            <li>NO ME OLVIDES - Myosotis sylvatica</li>
                            <li>PASIONARIA - Passiflora incarnata</li>
                            <li>ROSA SYRIA - Hibiscus syriacus-trinae</li>
                            <li>RUDA - Ruda graveolens</li>
                            <li>SABILA - Aloe vera</li>
                            <li>TREBOL ROJO - Trifolium Pratense</li>
                            <li>TUNA - Opuntia vulgaris</li>
                            <li>VICTORIA REGIA - Victoria amazónica</li>
                            <li>ZANAHORIA SALVAJE - Daucus carota</li>
                            <li>ZINIA - Zinnia elegans</li>
                        </ol>
                    </div>
                    
                </div>
            
            </div >

            <Footer />

        </>
    )
}
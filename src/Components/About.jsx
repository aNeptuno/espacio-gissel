import './About.css';

import NavbarComponent from "./General/Navbar";
import Footer from "./General/Footer";

import about from '../img/presentacion.png';
import logo from '../img/header1.png';

import { Slide } from "react-awesome-reveal";

import bg from "../img/aboutbg1.jpg"

export const About = () => {
    return(
        <>
        <div>
            <div>
                <section className="parallax img-p-1" style={{ backgroundImage: `url(${bg})`}} >
                    <NavbarComponent />
                    <div className="caption-left">
                        <ul>
                            <li>
                                <a href="/">INICIO</a>
                            </li>
                            <span>/</span>
                            <li>CONOCEME</li>
                        </ul>
                        <h1>CONOCEME</h1>
                    </div>
                </section>  
            </div>
        </div>

        <div className="pt-5">
            <div className="container pt-5 pb-5">
                <Slide left>
                <h1 className="title text-center pb-3">Un poco sobre mi</h1>
                </Slide>
                
                <div className="about-content">
                    <div className="about-content-welcome pt-3">
                        <div className="about-page-img pb-1">
                            <img src={about} alt="Espacio Gissel Logo" />
                        </div> 

                        <p className="text d-inline-block about-page-p1">
                            Desde mi niñez tengo un contacto muy cercano a la tierra ya que mis padres plantaban y mi abuela curaba con plantas y preparados los empachos y algunos malestares. Sin saber, más tarde en mi vida, cuando entré a trabajar a la homeopatía Abies, se me abrió todo un mundo de conexión entre los padecimientos y su cura a través de las tinturas madre de los principios de Hanneman, y comencé a usar las flores de bach en mis hijos y en mí, siendo de gran ayuda en nuestros procesos. Al mismo tiempo estudiaba enfermería, lo que me despertó la capacidad de servicio y asistencia en la salud, pero con mi mirada, que va más allá del síntoma, y entendiendo que somos un todo: Cuerpo, Mente y Espíritu.
                        </p>
                    </div>

                    <p className="text about-content-text">
                        Estamos conectados: nuestros hábitos, lo que sentimos, lo que padcemos y queremos cambiar, están unidos a la familia que elijo y de la que vengo. También nos atraviesan nuestras creencias conscientes e inconscientes, las colectivas y todo lo que nos rodea, por lo que si tratamos un solo aspecto, no hallaremos la curación de nuestro <b>Ser</b>. Por eso este es un <b>Espacio</b> donde abordo los tratamientos tanto de dolencias corporales, emocionales, mentales y espirituales desde distintas técnicas y herramientas de manera personalizada.

                        Buscando y encontrando sanar y sanarme en las heridas de mi arbol, de la mano de grandes maestros que me han guiado es que comparto gozosa este camino con ustedes. Soy una enamorada de mi trabajo y agradecida por lo que recibo día a día.
                        Como dice Fito Paez <i><quote>‟No cuento el vuelto,siempre es de más”.</quote></i>
                    </p>
                    <p className="text about-content-text">   
                        <p className='pt-1 pb-1'>Estoy formada en disciplinas como: </p>

                        <li>Digitopuntura y Shiatsu (Dr Gustavo Ripoll)</li>
                        <li>Reflexologia (Estética Natural) </li>
                        <li>Terapia del Dolor (E.N.)</li>
                        <li>Técnica espalda y piernas cansadas (E.N.)</li>
                        <li>Maderoterapia (E.N.)</li>
                        <li>Fibroedema Geloide-Celulitis (Mathias Gonzalez)</li>
                        <li>Drenaje Linfático y presoterapia</li>
                        <li>Gemoterapia</li>
                        <li>Aromaterapia</li>
                        <li>Rituales de Sanación (Cristobal Jodorosky)</li>
                        <li>Rituales Chamanismo (Miguel Valls)</li>
                        <li>Péndulo</li>
                        <li>Lectura Registros Akashicos (Nelly Mendez)</li>
                        <li>Lectura Carta Numerológica (Marta Temponi)</li>
                        <li>Terapeuta Flores de Bach® (Centro Bach y Virginia Cabrera Baladan - Terapeuta Sistemica)</li>
                        <li>Flores del Mediterráneo® (Elizabeth Bak)</li>
                        <li>Flores del Alba y Alquimia (Pedro Lopez Clemente)</li>
                        <li>Alquimia 1 (Escuela Misterio)</li>
                        <li>Astrología (Fabio Rodriguez)</li>
                        <li>Tarot Egipcio Y Rider (Virginia Cabrera Baladan)</li>
                        <li>Practicante de Barras de Acces y Facilitadora de clases de barras (Access consciousness®)</li>
                        <li>Símbolos de luz (Escuela Akasha)</li>
                        <li>Auxiliar de enfermería (Escuela Scoseria 1997)</li>
                        
                    </p>
                </div>
            </div>

            <div className="container pt-5 pb-5">
                <h1 className="title text-center pb-3">Historia del logo</h1>
                
                <div className="about-content">
                    <div className="about-content-welcome welcome-2 pt-3">
                        <p className="text d-inline-block about-page-p2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dignissimos minima, 
                            eaque quibusdam iusto ut perferendis aliquam. Neque deleniti voluptatum placeat commodi nam, reprehenderit tempora, sit esse quo in qui.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dignissimos minima, 
                            eaque quibusdam iusto ut perferendis aliquam. Neque deleniti voluptatum placeat commodi nam, reprehenderit tempora, sit esse quo in qui.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dignissimos minima, 
                            eaque quibusdam iusto ut perferendis aliquam. Neque deleniti voluptatum placeat commodi nam, reprehenderit tempora, sit esse quo in qui.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dignissimos minima, 
                            eaque quibusdam iusto ut perferendis aliquam. Neque deleniti voluptatum placeat commodi nam, reprehenderit tempora, sit esse quo in qui.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dignissimos minima, 
                            eaque quibusdam iusto ut perferendis aliquam. Neque deleniti voluptatum placeat commodi nam, reprehenderit tempora, sit esse quo in qui.
                        </p>

                        <div className="about-page-img about-img-logo">
                            <img src={logo} alt="Espacio Gissel Logo"/>
                        </div>
                    </div>

                    <p className="text about-content-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dignissimos minima, 
                        eaque quibusdam iusto ut perferendis aliquam. Neque deleniti voluptatum placeat commodi nam, reprehenderit tempora, sit esse quo in qui.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dignissimos minima, 
                        eaque quibusdam iusto ut perferendis aliquam. Neque deleniti voluptatum placeat commodi nam, reprehenderit tempora, sit esse quo in qui.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dignissimos minima, 
                        eaque quibusdam iusto ut perferendis aliquam. Neque deleniti voluptatum placeat commodi nam, reprehenderit tempora, sit esse quo in qui.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dignissimos minima, 
                        eaque quibusdam iusto ut perferendis aliquam. Neque deleniti voluptatum placeat commodi nam, reprehenderit tempora, sit esse quo in qui.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dignissimos minima, 
                        eaque quibusdam iusto ut perferendis aliquam. Neque deleniti voluptatum placeat commodi nam, reprehenderit tempora, sit esse quo in qui.
                    </p>
                </div>
            </div>
        </div>
        <Footer />
        
        </>
    ) 
}
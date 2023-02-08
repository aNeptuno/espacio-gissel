import NavbarComponent from "./General/Navbar";
import Footer from "./General/Footer";

import bg from "../img/barrasbg2.jpg"

import img1 from "../img/barrasImg.jpg"
import img2 from "../img/accessbar.jpg"

export const TerapiasBarras = () => {
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
                                <li>TERAPIAS / BARRAS DE ACCESS ®</li>
                            </ul>
                            <h1>BARRAS DE ACCESS ®</h1>
                        </div>
                    </section>
                </div>
            </div>

            <div className="masajes-container pt-5 pb-5">

                <h2 className="masajes-title text-center pb-5 pt-5 ">¿QUÉ SON LAS BARRAS DE ACCESS®?</h2>
                <div className="container d-flex flex-row-reverse pb-5 justify-content-between">
                    <div className="msj-img">
                        <img src={img1} alt="barras" width="400px" />
                    </div>
                    <div className="msj-text text">
                        Las barras son 32 puntos en la cabeza y estos representan cosas como: tu cuerpo, dinero, sanación, creatividad, gozo, paz y calma, solo por nombrar unos pocos. Las barras son toques ligeramente suaves que dejan ir los pensamientos, sentimientos, emociones y consideraciones que hayas guardado en cualquier vida.

                        Cuando estos puntos se tocan ligeramente con los dedos, tu cuerpo empieza a sentir una relajación tan profunda que dejas ir las cosas que te han mantenido atascado en esta vida y vidas pasadas también. Garry Douglas -fundador de Access Consciousness- dice que, lo peor que puede pasar es que toda tu vida cambie para bien, en el mejor de los casos, te sientes como si hubieras tenido un buen masaje, al final los resultados siempre serán positivos.

                        Una sesión típica dura aproximadamente una hora y gente por todo el mundo han dicho que las Barras les ha ayudado a cambiar las cosas que pensaban que eran incambiables en sus vidas; cosas como sus cuerpos, situaciones de dinero, relaciones, problemas crónicos de salud y mental. Muchas personas dicen que sus vidas son simplemente más fáciles y más alegres después de una sesión de Barras, esto y mucho más ha sido capaz de mejorar esta increíble y poderosa terapia que nos ha traído al mundo Access Consciousness.

                    </div>

                </div>

                <hr />

                <h2 className="masajes-title text-center pb-5 pt-5">BENEFICIOS</h2>
                <div className="container d-flex flex-row pb-5 justify-content-between">
                    <div className="msj-img">
                        <img src={img2} alt="aromaterapia" width="400px" />
                    </div>
                    <div className="msj-text text">
                        <p className="text">
                        Son muchos los beneficios que tiene, las Barras de Access son una gran contribución al lugar del trabajo para 
                        reducir el estrés acumulado en nuestro cuerpo por esa carga que se tiene cuando se trabaja demasiado, ayuda a aumentar 
                        la productividad en lo que haces, el entusiasmo por seguir trabajando, a crear nuevas cosas haciendo volar la imaginación 
                        para así tener grandes ideas no solo a corto plazo si no a largo plazo y ayuda a mejorar el trabajo en equipo. 
                        Es un beneficio profesional, que ayuda a mejorar a uno mismo en el trabajo y también su ayuda contribuye en la escuela 
                        en el que caso de que se estudie alguna carrera profesional, es una terapia que beneficia muchas partes de nuestro cuerpo para sentirse bien.
                        </p>
                        
                        <li>Liberar fobias y creencias.</li>
                        <li>Manejar la  ansiedad y depresión.</li>
                        <li>Disipar el insomnio y descansar.</li>
                        <li>Voluntad para los cambios que vienes postergando.</li>
                        <li>Mejora la comunicación con tu cuerpo en todos los aspectos.</li>  
                    </div>

                </div>


            </div>

            <Footer />

        </>
    )
}
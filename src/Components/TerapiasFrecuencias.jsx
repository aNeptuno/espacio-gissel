import './Masajes.css';
import NavbarComponent from "./General/Navbar";
import Footer from "./General/Footer";

import bg from "../img/frecuenciasbg.jpg"

import img1 from "../img/healyresonador.jpg"
import img2 from "../img/frecuenciasbg3.jpg"


export const TerapiasFrecuencias = () => {
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
                        El resonador Healy® es un dispositivo que utiliza programas de Frecuencia de Microcorriente Individualizada (IMF) para la armonización de su Campo Bioenergético.
                    </div>

                </div>

                <hr />

                <h2 className="masajes-title text-center pb-5 pt-5">MAS INFORMACION...</h2>
                <div className="container d-flex flex-row-reverse pb-5 justify-content-between">
                    <div className="msj-img">
                        <img src={img2} alt="aromaterapia" width="400px" />
                    </div>
                    <div className="msj-text text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, earum est. 
                        Quis, autem dolor voluptas itaque cum reiciendis ipsa quisquam impedit provident deleniti. Delectus temporibus non, voluptatem ipsam soluta explicabo?
                    </div>

                </div>


            </div>

            <Footer />

        </>
    )
}
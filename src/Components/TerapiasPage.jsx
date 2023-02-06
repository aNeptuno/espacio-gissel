
import NavbarComponent from "./General/Navbar";
import Footer from "./General/Footer";

import bg from "../img/terapiasbg3.png"

export const TerapiasPage = () => {
    return(
        <>
        <div>
            <div>
                <section className="parallax img-p-1" style={{ backgroundImage: `url(${bg})`}} >
                    <NavbarComponent />
                    <div className="caption-left">
                        <ul>
                            <li>
                                <a href="#">INICIO</a>
                            </li>
                            <span>/</span>
                            <li>TERAPIAS</li>
                        </ul>
                        <h1>TERAPIAS</h1>
                    </div>
                </section>  
            </div>
        </div>
        <div id="Aromaterapia">
            <h1>Aromaterapia</h1>
        </div>
        <div id="Flores">
            <h1>Flores de Bach y Mediterráneo</h1>
        </div>
        <div id="Barras">
            <h1>Barras de Access copy</h1>
        </div>
        <div id="Frecuencias">
            <h1>Terapia de Frecuencias</h1>
        </div>
        <div id="CartasNatales">
            <h1>Cartas Natales</h1>
        </div>
        <div id="Numerologia">
            <h1>Cartas Numerológicas</h1>
        </div>
        <Footer />
        
        </>
    ) 
}
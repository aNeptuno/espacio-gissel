
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
        <Footer />
        
        </>
    ) 
}

import NavbarComponent from "./General/Navbar";
import Footer from "./General/Footer";

import bg from "../img/masajesbg1.jpg";

import ScrollSpyTest from "./scrollspytest";

export const Masajes = () => {
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
                            <li>MASAJES</li>
                        </ul>
                        <h1>MASAJES</h1>
                    </div>
                </section>  
            </div>
        </div>

        
        <ScrollSpyTest />

        <Footer />
        
        </>
    ) 
}
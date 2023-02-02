import NavbarComponent from "./General/Navbar";
import Footer from "./General/Footer";
import ComponentHeader from "./General/ComponentHeader";

import about from '../img/presentacion.png';
import logo from '../img/header1.png';

export const About = () => {
    return(
        <>
        <ComponentHeader /> 
        <NavbarComponent /> 
        <div>
            <div className="container pt-5">
                <h1 className="title text-center pb-2">Un poco sobre mi</h1>
                
                <div className="about-content">
                    <div className="about-content-welcome">
                        <div className="about-page-img about-img">
                            <img src={about} alt="Espacio Gissel Logo" />
                        </div>

                        <p className="text d-inline-block">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dignissimos minima, 
                            eaque quibusdam iusto ut perferendis aliquam. Neque deleniti voluptatum placeat commodi nam, reprehenderit tempora, sit esse quo in qui.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dignissimos minima, 
                            eaque quibusdam iusto ut perferendis aliquam. Neque deleniti voluptatum placeat commodi nam, reprehenderit tempora, sit esse quo in qui.
                        </p>
                    </div>

                    <p className="text">
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dignissimos minima, 
                        eaque quibusdam iusto ut perferendis aliquam. Neque deleniti voluptatum placeat commodi nam, reprehenderit tempora, sit esse quo in qui.
                    </p>
                </div>
            </div>

            <div className="container pt-5">
                <h1 className="title text-center pb-2">Historia del logo</h1>
                
                <div className="about-content">
                    <div className="about-content-welcome">
                        <p className="text d-inline-block">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dignissimos minima, 
                            eaque quibusdam iusto ut perferendis aliquam. Neque deleniti voluptatum placeat commodi nam, reprehenderit tempora, sit esse quo in qui.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dignissimos minima, 
                            eaque quibusdam iusto ut perferendis aliquam. Neque deleniti voluptatum placeat commodi nam, reprehenderit tempora, sit esse quo in qui.
                        </p>

                        <div className="about-page-img about-img-logo">
                            <img src={logo} alt="Espacio Gissel Logo" width="500px"/>
                        </div>
                    </div>

                    <p className="text">
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
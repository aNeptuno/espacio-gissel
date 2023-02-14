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
                        <div className="about-page-img">
                            <img src={about} alt="Espacio Gissel Logo" />
                        </div> 

                        <p className="text d-inline-block about-page-p1">
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dignissimos minima, 
                        eaque quibusdam iusto ut perferendis aliquam. Neque deleniti voluptatum placeat commodi nam, reprehenderit tempora, sit esse quo in qui.
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
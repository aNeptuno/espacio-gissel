
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import logo from '../../img/logo-gissel-clean.svg';

import Mapa from './Mapa';

function Footer () {
    return(
        <div className="contacto" id="Contacto">
            <div className="d-flex flex-row pt-4 contacto-welcome">
                <h1 className="title">Espacio</h1>
                <img src={logo}  aria-label='Espacio Gissel Logo' className="footer-Logo"></img>
                <h1 className="title">Gissel</h1>
            </div>
            <Mapa />
            <div className='contacto-info'>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faWhatsapp} color="#ffffff"/> 
                        <span className='text'>094140929</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faLocationDot} color="#ffffff"/>
                        <span className='text'>Defensa 2207</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faPaperPlane} color="#ffffff"/>
                        <span className='text'>gisselarmonia@gmail.com</span>
                    </li>
                </ul>
            </div>
        </div>
       
    ) 
}

export default Footer;